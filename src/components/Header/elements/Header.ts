import styled from 'styled-components';
import { styles } from 'src/constants/style';

export const Container = styled.header`
  height: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 11;
`;

export const Logo = styled.div`
`;

export const Title = styled.div`
  color: ${styles.colors.black};
`;
