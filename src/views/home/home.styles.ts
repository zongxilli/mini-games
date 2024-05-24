import { styled } from 'styled-components';

import { Subtitle1 } from '../../shared';

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

export const PageTitleContainer = styled(Subtitle1)`
  position: absolute;
  top: 2rem;
  left: 2rem;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
