import styled from 'styled-components';
import { styles } from 'src/constants/style';

export const AccordionWrapper = styled.div`
  margin-bottom: 20px;
`;


export const AccordionTitle = styled.button`
  background-color: ${styles.colors.gray};
  box-sizing: border-box;
  color: ${styles.colors.black};
  cursor: pointer;
  display: block;
  font-size: 1rem;
  height: 40px;
  padding: 0 10px;
  position: relative;
  text-align: left;
  width: 100%;

  &::after {
    border-bottom: 3px solid ${styles.colors.black};
    border-right: 3px solid ${styles.colors.black};
    content: '';
    height: 8px;
    position: absolute;
    right: 20px;
    top: 12px;
    transform-origin: 7px 8px;
    transform: rotate(${({ isOpen }: { isOpen: boolean }) => (isOpen ? '-135' : '45')}deg);
    transition: transform 0.2s ${styles.easings.easeOutQuad};
    width: 8px;
  }
`;

interface TabpanelProps {
  currentHeight: number | string;
  isOpen: boolean;
}

export const AccordionPanel = styled.div`
height: ${({ currentHeight }: TabpanelProps) => (
    typeof currentHeight === 'number' && currentHeight > 0
      ? `${currentHeight}px`
      : currentHeight
  )};
overflow: hidden;
${({ isOpen }: TabpanelProps) => (isOpen ? `
  transition: height 0.2s ${styles.easings.easeOutQuad} 0s, visibility 0s 0s;
  visibility: visible;
` : `
  transition: height 0.2s ${styles.easings.easeOutQuad} 0s, visibility 0s 0.2s;
  visibility: hidden;
`)};
`;
