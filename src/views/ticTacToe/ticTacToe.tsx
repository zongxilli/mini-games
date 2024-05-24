import { useState } from 'react';

import Board from './components/board';
import { Container, PageTitleContainer } from './ticTacToe.styles';

type BoardItem = 'X' | 'O' | '';
export type CurrentBoard = [
  BoardItem,
  BoardItem,
  BoardItem,
  BoardItem,
  BoardItem,
  BoardItem,
  BoardItem,
  BoardItem,
  BoardItem,
];

const TicTacToe = () => {
  const [currentBoard, setCurrentBoard] = useState<CurrentBoard>([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  return (
    <Container>
      <PageTitleContainer>Tic Tac Toe</PageTitleContainer>
      <Board
        currentBoard={currentBoard}
        setCurrentBoard={setCurrentBoard}
        currentMove={currentMove}
        setCurrentMove={setCurrentMove}
      />
    </Container>
  );
};

export default TicTacToe;
