import styled from 'styled-components';
import { styles } from 'src/constants/style';

export const Container = styled.header`
  background-color: ${styles.colors.lightBlue};
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  z-index: 11;
`;

export const Title = styled.div`
  color: ${styles.colors.black};
  font-size: 1rem;
  text-align: center;
`;
