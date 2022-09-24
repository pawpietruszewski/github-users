import styled from 'styled-components';
import { styles } from 'src/constants/style';

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const Input = styled.input`
  background: ${styles.colors.gray};
  font-size: 1rem;
  height: 40px;
  padding: 0 20px 0;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${styles.colors.darkGray};

  :-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  ::-moz-placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  ::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  background-color: ${styles.colors.blue};
  box-sizing: border-box;
  color: ${styles.colors.white};
  cursor: pointer;
  height: 40px;
  margin-top: 20px;
  width: 100%;
`;
