import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Body1, Button } from '../../shared';

import Board from './components/board';
import {
  BackButtonContainer,
  Container,
  PageTitleContainer,
  ResultContainer,
} from './ticTacToe.styles';

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

const calculateWinner = (squares: CurrentBoard) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const noWinner = (squares: CurrentBoard) => {
  for (const square of squares) {
    if (square === '') return false;
  }

  return true;
};

const initialBoard: CurrentBoard = ['', '', '', '', '', '', '', '', ''];

const TicTacToe = () => {
  const navigate = useNavigate();

  const [currentBoard, setCurrentBoard] = useState<CurrentBoard>(initialBoard);
  const [currentMove, setCurrentMove] = useState(0);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    const possibleWinner = calculateWinner(currentBoard);
    const endWithNoWinner = noWinner(currentBoard);

    if (endWithNoWinner && !possibleWinner) {
      alert('No winner, game will restart!');
      setCurrentBoard(initialBoard);
    }

    if (possibleWinner) setWinner(possibleWinner);
  }, [currentBoard, currentMove]);

  return (
    <Container>
      <PageTitleContainer>Tic Tac Toe</PageTitleContainer>
      <BackButtonContainer>
        <Button onClick={() => navigate('/')}>Back</Button>
      </BackButtonContainer>

      {winner === '' && (
        <Board
          currentBoard={currentBoard}
          setCurrentBoard={setCurrentBoard}
          currentMove={currentMove}
          setCurrentMove={setCurrentMove}
        />
      )}
      {winner !== '' && (
        <ResultContainer>
          <Body1>Winner is: {winner}!</Body1>
          <Button
            onClick={() => {
              setCurrentBoard(initialBoard);
              setWinner('');
            }}
          >
            Restart Game
          </Button>
        </ResultContainer>
      )}
    </Container>
  );
};

export default TicTacToe;
