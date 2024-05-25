import { styled } from 'styled-components';

export const BoardContainer = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
`;

export const SquareContainer = styled.button`
  height: 6rem;
  width: 6rem;
  padding: 0.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 1px solid ${(props) => props.theme.colors.whiteDefault};
  background: ${(props) => props.theme.colors.indigoExtraLight};
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const SquareText = styled.p`
  font-size: 5rem;

  font-weight: 500;
  margin: 0;
  color: ${(props) => props.theme.colors.whiteDefault};
  vertical-align: top;
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
