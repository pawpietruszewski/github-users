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

export const Nav = styled.div`
  margin: 20px 0;
  text-align: center;
`;

export const SearchHistoryLink = styled.a`
  background-color: ${styles.colors.lightBlue};
  border-radius: 10px;
  border: 1px solid ${styles.colors.blue};
  color: ${styles.colors.black};
  cursor: pointer;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: lighter;
  margin-left: auto;
  margin: 5px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
`;
