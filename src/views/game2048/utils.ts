import { Board2048, Board2048Row } from './game2048';

export const initialBoard: Board2048 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const getRandomInt = (max: number) =>
  Math.floor(Math.random() * Math.floor(max));

export const addNumber = (board: Board2048): Board2048 => {
  const newBoard = board.map((row) => [...row]) as Board2048;
  const emptySpaces = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (newBoard[r][c] === 0) {
        emptySpaces.push({ row: r, col: c });
      }
    }
  }
  if (emptySpaces.length === 0) {
    return newBoard;
  }
  const { row, col } = emptySpaces[getRandomInt(emptySpaces.length)];
  newBoard[row][col] = Math.random() > 0.1 ? 2 : 4;
  return newBoard;
};

const slide = (row: Board2048Row) => {
  let arr = row.filter((val) => val);
  const missing = 4 - arr.length;
  const zeros = Array(missing).fill(0);
  arr = arr.concat(zeros);
  return arr as Board2048Row;
};

const combine = (row: Board2048Row) => {
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] === row[i + 1] && row[i] !== 0) {
      row[i] *= 2;
      row[i + 1] = 0;
    }
  }
  return row as Board2048Row;
};

const operate = (row: Board2048Row) => {
  row = slide(row);
  row = combine(row);
  row = slide(row);
  return row as Board2048Row;
};

export const moveLeft = (board: Board2048) => {
  const newBoard = board.map((row) => operate(row)) as Board2048;
  return { board: newBoard, score: calculateScore(newBoard) };
};

// 2 2 2 0  initial
// 0 2 2 2  reverse()
// 2 2 2 0  slide (operate func)
// 4 0 2 0  combine (operate func)
// 4 2 0 0  slide (operate func)
// 0 0 2 4  reverse()
export const moveRight = (board: Board2048) => {
  const newBoard = board.map((row) =>
    operate(row.reverse() as Board2048Row).reverse(),
  ) as Board2048;
  return { board: newBoard, score: calculateScore(newBoard) };
};

export const moveUp = (board: Board2048) => {
  let newBoard = rotateLeft(board);
  newBoard = newBoard.map((row) => operate(row)) as Board2048;
  newBoard = rotateRight(newBoard);
  return { board: newBoard, score: calculateScore(newBoard) };
};

export const moveDown = (board: Board2048) => {
  let newBoard = rotateRight(board);
  newBoard = newBoard.map((row) => operate(row)) as Board2048;
  newBoard = rotateLeft(newBoard);
  return { board: newBoard, score: calculateScore(newBoard) };
};

const rotateRight = (matrix: Board2048): Board2048 => {
  const result = initialBoard;
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      result[c][3 - r] = matrix[r][c];
    }
  }
  return result;
};

const rotateLeft = (matrix: Board2048): Board2048 => {
  const result = initialBoard;
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      result[3 - c][r] = matrix[r][c];
    }
  }
  return result;
};

const calculateScore = (board: Board2048) => {
  return board.flat().reduce((acc, val) => acc + val, 0);
};

export const isGameOver = (board: Board2048) => {
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c] === 0) {
        return false;
      }
      if (c < 3 && board[r][c] === board[r][c + 1]) {
        return false;
      }
      if (r < 3 && board[r][c] === board[r + 1][c]) {
        return false;
      }
    }
  }
  return true;
};
