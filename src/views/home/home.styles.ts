import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.systemBackgroundPrimary};
`;

export const SwitchThemeContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`;

export const PageTitleContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
`;
