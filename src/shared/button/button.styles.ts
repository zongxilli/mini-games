import { styled } from 'styled-components';

export const StyledButton = styled.button`
  height: 2.5rem;
  cursor: pointer;

  padding: 0 0.5rem;
  box-sizing: border-box;

  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme.colors.whiteDefault};
  background: ${(props) => props.theme.colors.indigoDefault};
`;

export const ButtonText = styled.p`
  font-size: 1rem;

  font-weight: 500;
  line-height: 1.025rem;
  margin: 0;
  color: ${(props) => props.theme.colors.whiteDefault};
  overflow: hidden;
  vertical-align: top;
`;
