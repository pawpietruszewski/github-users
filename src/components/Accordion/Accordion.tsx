import { useState, useRef, useEffect } from 'react';
import { useRepos } from 'src/hooks/useRepos';
import RepoTile from 'src/components/RepoTile';

import {
  AccordionPanel,
  AccordionTitle,
  AccordionWrapper,
  Loader,
  NoRepo,
} from './elements';

export interface AccordionProps {
  reposUrl: string;
  title: string;
}

const Accordion = ({ reposUrl, title }: AccordionProps) => {
  const [isOpen, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const refTimeout = useRef<number>();
  const refContent = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | string>(0);
  const { data, isLoading } = useRepos(clicked ? reposUrl : null );

  const toggleAccordion = () => {
    clearTimeout(refTimeout.current);
    if (refContent.current) {
      setHeight(refContent.current.offsetHeight);
      refTimeout.current = window.setTimeout(
        () => setHeight(isOpen ? 0 : 'auto'),
        isOpen ? 0 : 200,
      );
    }
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (!isLoading && data) {
      toggleAccordion();
    }
  }, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  const onClick = () => {
    setClicked(true);
    if (!data) {
      return;
    }
    toggleAccordion();
  };

  return (
    <AccordionWrapper>
      <AccordionTitle
        isOpen={isOpen}
        onClick={onClick}
      >
        {title}
        {clicked && isLoading && (
          <Loader />
        )}
      </AccordionTitle>
      <AccordionPanel
        currentHeight={height}
        isOpen={isOpen}
      >
        <div ref={refContent}>
          {data && !!data.length && (
            <>
              {data?.map((item) => (
                <RepoTile
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  stars={item.stargazers_count}
                />
              ))}
            </>
          )}
          {data && !data.length && (
            <NoRepo>
              Repositories not found
            </NoRepo>
          )} 
        </div>
      </AccordionPanel>
    </AccordionWrapper>
  );
};

export default Accordion;
