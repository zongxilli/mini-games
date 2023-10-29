import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.systemBackgroundPrimary};
`;
