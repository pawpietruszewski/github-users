import styled from 'styled-components';
import { styles } from 'src/constants/style';

export const Wrapper = styled.div`
  box-sizing: border-box;
  font-size: 1rem;
  margin: 7px 0;
  padding-left: 20px;
  position: relative;
  width: 100%;
`;

export const Inside = styled.div`
  background: ${styles.colors.darkGray};
  box-sizing: border-box;
  font-size: 1rem;
  padding: 10px 5px 50px;
  width: 100%;
`;

export const Title = styled.div`
  box-sizing: border-box;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 20px 5px 0;
`;

export const Description = styled.div``;

export const Stars = styled.span`
  font-size: 1.125rem;
  font-size: 1rem;
  font-weight: bold;
  position: absolute;
  right: 20px;
  top: 10px;

  span {
    font-size: 1.25rem;
    margin-left: 5px;
  }
`;
