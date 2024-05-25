import { styled } from 'styled-components';

import { H4 } from '../../shared';

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  background-color: ${(props) => props.theme.colors.systemBackgroundPrimary};
`;

export const PageTitleContainer = styled(H4)`
  position: absolute;
  top: 2rem;
  left: auto;
  right: auto;
`;

export const GameOverLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackButtonContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Board = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0.25rem;
`;

const getBackgroundColor = (value: number) => {
  switch (value) {
    case 2:
      return '#eee4da';
    case 4:
      return '#ede0c8';
    case 8:
      return '#f2b179';
    case 16:
      return '#f59563';
    case 32:
      return '#f67c5f';
    case 64:
      return '#f65e3b';
    case 128:
      return '#edcf72';
    case 256:
      return '#edcc61';
    case 512:
      return '#edc850';
    case 1024:
      return '#edc53f';
    case 2048:
      return '#edc22e';
    default:
      return '#cdc1b4';
  }
};

type CellProps = {
  value: number;
};

export const Cell = styled.div<CellProps>`
  width: 6rem;
  height: 6rem;
  background-color: ${(props) => getBackgroundColor(props.value)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 0.25rem;
  color: ${(props) => (props.value > 0 ? '#776e65' : '#cdc1b4')};
`;
