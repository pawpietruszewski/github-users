import {
  Description,
  Inside,
  Stars,
  Title,
  Wrapper,
} from './elements';

export interface RepoTileProps {
  description?: string;
  stars?: number;
  title: string;
}

const RepoTile = ({ title, description, stars = 0 }: RepoTileProps) => (
  <Wrapper>
    <Inside>
      <Title>
        {title}
      </Title>
      {description && (
        <Description>
          {description}
        </Description>
      )}
      <Stars>
        {stars}<span>★</span>
      </Stars>
    </Inside>
  </Wrapper>
);

export default RepoTile;
