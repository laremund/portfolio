import { useState, useEffect, useCallback } from 'react';

type Position = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE: Position[] = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION: Direction = 'RIGHT';
const GAME_SPEED = 150;

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [nextDirection, setNextDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, []);

  const checkCollision = useCallback((head: Position, body: Position[]): boolean => {
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    return body.some(segment => segment.x === head.x && segment.y === head.y);
  }, []);

  const moveSnake = useCallback(() => {
    if (isGameOver || isPaused || !isGameStarted) return;

    setDirection(nextDirection);

    setSnake(prevSnake => {
      const head = prevSnake[0];
      let newHead: Position;

      switch (nextDirection) {
        case 'UP':
          newHead = { x: head.x, y: head.y - 1 };
          break;
        case 'DOWN':
          newHead = { x: head.x, y: head.y + 1 };
          break;
        case 'LEFT':
          newHead = { x: head.x - 1, y: head.y };
          break;
        case 'RIGHT':
          newHead = { x: head.x + 1, y: head.y };
          break;
      }

      if (checkCollision(newHead, prevSnake)) {
        setIsGameOver(true);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood(newSnake));
        return newSnake;
      }

      newSnake.pop();
      return newSnake;
    });
  }, [nextDirection, food, isGameOver, isPaused, isGameStarted, checkCollision, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isGameStarted && (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        setIsGameStarted(true);
      }

      if (e.key === ' ') {
        e.preventDefault();
        if (isGameStarted && !isGameOver) {
          setIsPaused(prev => !prev);
        }
      }

      if (isPaused || isGameOver) return;

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setNextDirection(prev => prev !== 'DOWN' ? 'UP' : prev);
          break;
        case 'ArrowDown':
          e.preventDefault();
          setNextDirection(prev => prev !== 'UP' ? 'DOWN' : prev);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setNextDirection(prev => prev !== 'RIGHT' ? 'LEFT' : prev);
          break;
        case 'ArrowRight':
          e.preventDefault();
          setNextDirection(prev => prev !== 'LEFT' ? 'RIGHT' : prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, isPaused, isGameOver, isGameStarted]);

  useEffect(() => {
    const gameLoop = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameLoop);
  }, [moveSnake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood({ x: 15, y: 15 });
    setDirection(INITIAL_DIRECTION);
    setNextDirection(INITIAL_DIRECTION);
    setIsGameOver(false);
    setIsPaused(false);
    setScore(0);
    setIsGameStarted(false);
  };

  const renderGrid = () => {
    const cells = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        const isSnake = snake.some(segment => segment.x === x && segment.y === y);
        const isHead = snake[0].x === x && snake[0].y === y;
        const isFood = food.x === x && food.y === y;

        cells.push(
          <div
            key={`${x}-${y}`}
            className={`w-5 h-5 border border-gray-800 ${
              isHead
                ? 'bg-green-600'
                : isSnake
                ? 'bg-green-500'
                : isFood
                ? 'bg-red-500'
                : 'bg-gray-900'
            }`}
          />
        );
      }
    }
    return cells;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-950 p-4">
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-bold text-green-500 mb-2">Snake Game</h1>
        <p className="text-xl text-gray-300">Score: {score}</p>
      </div>

      <div
        className="relative grid gap-0 bg-gray-800 p-1"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
          width: `${GRID_SIZE * CELL_SIZE + 8}px`,
        }}
      >
        {renderGrid()}

        {!isGameStarted && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="text-center text-white">
              <p className="text-2xl mb-2">Press any arrow key to start</p>
            </div>
          </div>
        )}

        {isPaused && isGameStarted && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="text-center text-white">
              <p className="text-2xl mb-2">Paused</p>
              <p className="text-sm">Press Space to continue</p>
            </div>
          </div>
        )}

        {isGameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="text-center text-white">
              <p className="text-3xl mb-2">Game Over!</p>
              <p className="text-xl mb-4">Final Score: {score}</p>
              <button
                onClick={resetGame}
                className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-center text-gray-400 text-sm">
        <p>Use arrow keys to move</p>
        <p>Press Space to pause</p>
      </div>
    </div>
  );
}