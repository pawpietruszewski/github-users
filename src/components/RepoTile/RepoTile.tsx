import {
  Description,
  Inside,
  Stars,
  Title,
  Wrapper,
} from './elements';

export interface RepoTileProps {
  description: string;
  stars?: number;
  title: string;
}

const RepoTile = ({ title, description, stars }: RepoTileProps) => (
  <Wrapper>
    <Inside>
      <Title>
        {title}
      </Title>
      <Description>
        {description}
      </Description>
      {stars && (
        <Stars>
          {stars}<span>★</span>
        </Stars>
      )}
    </Inside>
  </Wrapper>
);

export default RepoTile;
