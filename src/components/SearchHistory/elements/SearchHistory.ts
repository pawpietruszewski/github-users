import styled from 'styled-components';
import { styles } from 'src/constants/style';

export const Container = styled.ul`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;

  li {
    background-color: ${styles.colors.gray};
    border: 1px solid ${styles.colors.black};
    margin: 5px;
    text-align: center;
  }

  a {
    box-sizing: border-box;
    color: ${styles.colors.black};
    display: inline-block;
    height: 100%;
    padding: 10px;
    text-decoration: none;
    width: 100%;
  }
`;

export const Empty = styled.div`
  color: ${styles.colors.black};
  font-size: 1rem;
  margin-top: 20px;
  text-align: center;
`;
