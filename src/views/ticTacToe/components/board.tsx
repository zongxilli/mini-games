import { Dispatch, SetStateAction } from 'react';

import { H1 } from '../../../shared';
import { BoardItem, CurrentBoard } from '../ticTacToe';

import { BoardContainer, GameOverLabel } from './components.styles';
import Square from './square';

type BoardProps = {
  currentBoard: CurrentBoard;
  setCurrentBoard: Dispatch<SetStateAction<CurrentBoard>>;
  currentMove: number;
  setCurrentMove: Dispatch<SetStateAction<number>>;
  winner: BoardItem;
};

const Board = ({
  currentBoard,
  setCurrentBoard,
  currentMove,
  setCurrentMove,
  winner,
}: BoardProps) => {
  const isXNext = currentMove % 2 === 0;

  const renderSquare = (index: number) => (
    <Square
      key={index}
      value={currentBoard[index]}
      onClick={() => {
        if (currentBoard[index] !== '') {
          alert('Please select an empty square');
        } else {
          setCurrentBoard((board) => {
            const copy = [...board] as CurrentBoard;
            copy[index] = isXNext ? 'X' : 'O';
            return copy;
          });
          setCurrentMove((move) => move + 1);
        }
      }}
    />
  );

  const renderWinnerInfo = () => {
    if (winner === '') return null;
    return (
      <GameOverLabel>
        <H1>Winner is: {winner}!</H1>
      </GameOverLabel>
    );
  };

  return (
    <BoardContainer>
      {new Array(9).fill(0).map((_i, idx) => renderSquare(idx))}
      {renderWinnerInfo()}
    </BoardContainer>
  );
};

export default Board;
