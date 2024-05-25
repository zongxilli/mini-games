import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, H1, H6 } from '../../shared';

import {
  BackButtonContainer,
  Board,
  Cell,
  Container,
  GameOverLabel,
  PageTitleContainer,
} from './game2048.styles';
import {
  addNumber,
  initialBoard,
  isGameOver,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
} from './utils';

export type Board2048Row = [number, number, number, number];

export type Board2048 = [
  Board2048Row,
  Board2048Row,
  Board2048Row,
  Board2048Row,
];

const Game2048 = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState(addNumber(addNumber(initialBoard)));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (gameOver) return;

      let newBoard: Board2048 | null = null;
      let newScore: number;
      switch (event.key) {
        case 'ArrowUp':
          ({ board: newBoard, score: newScore } = moveUp(board));
          break;
        case 'ArrowDown':
          ({ board: newBoard, score: newScore } = moveDown(board));
          break;
        case 'ArrowLeft':
          ({ board: newBoard, score: newScore } = moveLeft(board));
          break;
        case 'ArrowRight':
          ({ board: newBoard, score: newScore } = moveRight(board));
          break;
        default:
          return;
      }
      if (newBoard) {
        const newBoardWithRandomNumber = addNumber(newBoard);
        setBoard(newBoardWithRandomNumber);
        setScore(newScore);

        if (isGameOver(newBoardWithRandomNumber)) {
          setGameOver(true);
        }
      }
    },
    [board, gameOver],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [board, handleKeyDown, score]);

  const renderHeader = () => (
    <>
      <PageTitleContainer>2048</PageTitleContainer>
      <BackButtonContainer>
        <Button onClick={() => navigate('/')}>Back</Button>
        <Button
          onClick={() => {
            setScore(0);
            setBoard(addNumber(addNumber(initialBoard)));
            setGameOver(false);
          }}
        >
          New Game
        </Button>
      </BackButtonContainer>
    </>
  );

  const renderScore = () => {
    return <H6>Score : {score}</H6>;
  };

  const renderGameOverLabel = () => {
    if (!gameOver) return null;

    return (
      <GameOverLabel>
        <H1>Game Over</H1>
      </GameOverLabel>
    );
  };

  const renderGame = () => {
    return (
      <Board>
        {board.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <Cell key={`${rowIndex}-${cellIndex}`} value={cell}>
              {cell !== 0 ? cell : ''}
            </Cell>
          )),
        )}

        {renderGameOverLabel()}
      </Board>
    );
  };

  return (
    <Container>
      {renderHeader()}
      {renderScore()}
      {renderGame()}
    </Container>
  );
};

export default Game2048;
