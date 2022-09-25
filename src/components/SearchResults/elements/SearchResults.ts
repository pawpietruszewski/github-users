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

export const Loading = styled.span`
  color: ${styles.colors.black};
  opacity: 0.6;
`;

export const Loader = styled.span`
  color: ${styles.colors.black};
  display: inline-block;
  height: 14px;
  margin: 0 10px;
  width: 14px;

  &::after {
    animation: lds-dual-ring 1.2s linear infinite;
    border: 1px solid ${styles.colors.black};
    border-color: ${styles.colors.black} transparent ${styles.colors.black} transparent;
    border-radius: 50%;
    content: "";
    display: block;
    height: 10px;
    margin: 3px;
    width: 10px;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
