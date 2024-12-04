import React, { useState, useEffect } from 'react';

const BOARD_SIZE = 10;
const SHIP_TYPES = [
  { name: '航空母舰', size: 5 },
  { name: '战列舰', size: 4 },
  { name: '巡洋舰', size: 3 },
  { name: '驱逐舰', size: 3 },
  { name: '潜艇', size: 2 },
];

const createEmptyBoard = () =>
  Array(BOARD_SIZE)
    .fill()
    .map(() => Array(BOARD_SIZE).fill(null));

const BattleshipGame = () => {
  const [gameState, setGameState] = useState('setup'); // 'setup', 'playing', 'gameOver'
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [boards, setBoards] = useState([
    createEmptyBoard(),
    createEmptyBoard(),
  ]);
  const [shipPlacements, setShipPlacements] = useState([{}, {}]);
  const [currentShipIndex, setCurrentShipIndex] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [winner, setWinner] = useState(null);

  const placeShip = (playerIndex, row, col) => {
    const ship = SHIP_TYPES[currentShipIndex];
    const newPlacements = [...shipPlacements];
    const newBoard = [...boards[playerIndex]];

    if (canPlaceShip(playerIndex, row, col, ship.size, isHorizontal)) {
      for (let i = 0; i < ship.size; i++) {
        const r = isHorizontal ? row : row + i;
        const c = isHorizontal ? col + i : col;
        newBoard[r][c] = ship.name;
      }
      newPlacements[playerIndex][ship.name] = {
        row,
        col,
        horizontal: isHorizontal,
      };
      setBoards(boards.map((b, i) => (i === playerIndex ? newBoard : b)));
      setShipPlacements(newPlacements);

      if (currentShipIndex === SHIP_TYPES.length - 1) {
        if (playerIndex === 1) {
          setGameState('playing');
        } else {
          setCurrentPlayer(1);
          setCurrentShipIndex(0);
        }
      } else {
        setCurrentShipIndex(currentShipIndex + 1);
      }
    }
  };

  const canPlaceShip = (playerIndex, row, col, size, horizontal) => {
    if (horizontal) {
      if (col + size > BOARD_SIZE) return false;
      for (let i = 0; i < size; i++) {
        if (boards[playerIndex][row][col + i] !== null) return false;
      }
    } else {
      if (row + size > BOARD_SIZE) return false;
      for (let i = 0; i < size; i++) {
        if (boards[playerIndex][row + i][col] !== null) return false;
      }
    }
    return true;
  };

  const handleAttack = (row, col) => {
    const targetPlayer = 1 - currentPlayer;
    const newBoards = [...boards];
    const targetBoard = newBoards[targetPlayer];

    if (targetBoard[row][col] === null) {
      targetBoard[row][col] = 'miss';
    } else if (
      typeof targetBoard[row][col] === 'string' &&
      targetBoard[row][col] !== 'miss' &&
      targetBoard[row][col] !== 'hit'
    ) {
      targetBoard[row][col] = 'hit';
      checkForWin(targetPlayer);
    } else {
      return; // Already attacked this cell
    }

    setBoards(newBoards);
    setCurrentPlayer(targetPlayer);
  };

  const checkForWin = (targetPlayer) => {
    const targetBoard = boards[targetPlayer];
    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        if (
          typeof targetBoard[row][col] === 'string' &&
          targetBoard[row][col] !== 'miss' &&
          targetBoard[row][col] !== 'hit'
        ) {
          return; // Found an unhit ship part
        }
      }
    }
    setGameState('gameOver');
    setWinner(1 - targetPlayer);
  };

  const resetGame = () => {
    setGameState('setup');
    setCurrentPlayer(0);
    setBoards([createEmptyBoard(), createEmptyBoard()]);
    setShipPlacements([{}, {}]);
    setCurrentShipIndex(0);
    setIsHorizontal(true);
    setWinner(null);
  };

  const renderCell = (playerIndex, row, col) => {
    const cellContent = boards[playerIndex][row][col];
    const isCurrentPlayer = playerIndex === currentPlayer;
    const canAttack = gameState === 'playing' && !isCurrentPlayer;

    let cellClass = 'w-8 h-8 border ';
    if (cellContent === 'hit') {
      cellClass += 'bg-red-500';
    } else if (cellContent === 'miss') {
      cellClass += 'bg-blue-300';
    } else if (cellContent && isCurrentPlayer) {
      cellClass += 'bg-gray-500';
    } else {
      cellClass += 'bg-white';
    }

    return (
      <button
        key={col}
        className={cellClass}
        onClick={() => {
          if (gameState === 'setup' && isCurrentPlayer) {
            placeShip(playerIndex, row, col);
          } else if (canAttack) {
            handleAttack(row, col);
          }
        }}
        disabled={
          gameState === 'gameOver' ||
          (gameState === 'playing' && isCurrentPlayer)
        }
      />
    );
  };

  const renderBoard = (playerIndex) => (
    <div className='mb-8'>
      <h2 className='text-xl font-bold mb-2'>玩家 {playerIndex + 1} 的棋盘</h2>
      <div className='grid gap-1'>
        {boards[playerIndex].map((row, rowIndex) => (
          <div key={rowIndex} className='flex'>
            {row.map((_, colIndex) =>
              renderCell(playerIndex, rowIndex, colIndex),
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-3xl font-bold mb-4'>高级战舰游戏</h1>
      {gameState === 'setup' && (
        <div className='mb-4'>
          <p>
            玩家 {currentPlayer + 1} 正在放置{' '}
            {SHIP_TYPES[currentShipIndex].name} (大小:{' '}
            {SHIP_TYPES[currentShipIndex].size})
          </p>
          <Button
            onClick={() => setIsHorizontal(!isHorizontal)}
            className='mt-2'
          >
            切换方向: {isHorizontal ? '水平' : '垂直'}
          </Button>
        </div>
      )}
      {gameState === 'playing' && (
        <p className='mb-4'>轮到玩家 {currentPlayer + 1} 攻击</p>
      )}
      {gameState === 'gameOver' && (
        <p className='mb-4 text-2xl font-bold'>
          游戏结束！玩家 {winner + 1} 获胜！
        </p>
      )}
      <div className='flex justify-around w-full'>
        {renderBoard(0)}
        {renderBoard(1)}
      </div>
      {gameState === 'gameOver' && (
        <Button onClick={resetGame} className='mt-4'>
          重新开始游戏
        </Button>
      )}
    </div>
  );
};

export default BattleshipGame;
