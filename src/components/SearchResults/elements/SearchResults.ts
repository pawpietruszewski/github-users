import styled from 'styled-components';
import { styles } from 'src/constants/style';

export const Container = styled.div`
  padding: 0 20px 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.div`
  color: ${styles.colors.black};
  font-size: 1rem;
  padding-bottom: 20px;
  text-align: left;
`;

export const Results = styled.div`
`;

export const Loading = styled.div`
  color: ${styles.colors.black};
  opacity: 0.6;
`;
