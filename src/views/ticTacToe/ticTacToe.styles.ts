import { styled } from 'styled-components';

import { H4 } from '../../shared';

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.systemBackgroundPrimary};
`;

export const PageTitleContainer = styled(H4)`
  position: absolute;
  top: 2rem;
  left: auto;
  right: auto;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
