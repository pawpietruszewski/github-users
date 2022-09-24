import { useState, useRef, useEffect, ReactNode, SyntheticEvent } from 'react';

import {
  AccordionWrapper,
  AccordionTitle,
  AccordionPanel,
} from './elements';

export interface AccordionProps {
  children: ReactNode;
  title: string;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setOpen] = useState(false);
  const refTimeout = useRef<number>();
  const refContent = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | string>(0);

  const onClick = (ev: SyntheticEvent<HTMLButtonElement>) => {
    ev.preventDefault;
    clearTimeout(refTimeout.current);
    if (refContent.current) {
      setHeight(refContent.current.offsetHeight);
      refTimeout.current = window.setTimeout(
        () => setHeight(isOpen ? 0 : 'auto'),
        isOpen ? 0 : 200,
      );
    }
    setOpen(!isOpen)
  };
  
  return (
    <AccordionWrapper>
      <AccordionTitle
        isOpen={isOpen}
        onClick={onClick}
      >
        {title}
      </AccordionTitle>
      <AccordionPanel
        currentHeight={height}
        isOpen={isOpen}
      >
        <div ref={refContent}>
          {children}
        </div>
      </AccordionPanel>
    </AccordionWrapper>
  );
};

export default Accordion;
