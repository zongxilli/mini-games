import { styled } from 'styled-components';

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
`;

export const SquareContainer = styled.button`
  height: 4rem;
  width: 4rem;
  padding: 0.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 1px solid ${(props) => props.theme.colors.whiteDefault};
  background: ${(props) => props.theme.colors.indigoDark};
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const SquareText = styled.p`
  font-size: 1rem;

  font-weight: 500;
  line-height: 1.025rem;
  margin: 0;
  color: ${(props) => props.theme.colors.whiteDefault};
  overflow: hidden;
  vertical-align: top;
`;
