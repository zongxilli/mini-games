import { useNavigate } from 'react-router-dom';

import { Button } from '../../shared';

import {
  BackButtonContainer,
  Container,
  PageTitleContainer,
} from './game2048.styles';

const Game2048 = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <PageTitleContainer>2048</PageTitleContainer>
      <BackButtonContainer>
        <Button onClick={() => navigate('/')}>Back</Button>
      </BackButtonContainer>
    </Container>
  );
};

export default Game2048;
