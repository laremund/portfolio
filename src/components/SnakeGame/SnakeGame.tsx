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

        let bgColor = 'bg-[#010409]';
        if (isHead) {
          bgColor = 'bg-[#1a7f37]';
        } else if (isSnake) {
          bgColor = 'bg-[#238636]';
        } else if (isFood) {
          bgColor = 'bg-[#8250df]';
        }

        cells.push(
          <div
            key={`${x}-${y}`}
            className={`w-5 h-5 border border-[#161b22] ${bgColor}`}
          />
        );
      }
    }
    return cells;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-[#0d1117]">
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-bold mb-2 text-white">Snake</h1>
        <p className="text-lg text-[#8b949e]">Score: {score}</p>
      </div>

      <div
        className="relative grid gap-0 p-1 rounded-lg overflow-hidden bg-[#161b22] border border-[#21262d]"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
          width: `${GRID_SIZE * CELL_SIZE + 8}px`,
        }}
      >
        {renderGrid()}

        {!isGameStarted && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#000000BF]">
            <div className="text-center text-white">
              <p className="text-2xl mb-2">Press any arrow key to start</p>
            </div>
          </div>
        )}

        {isPaused && isGameStarted && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#000000BF]">
            <div className="text-center text-white">
              <p className="text-2xl mb-2">Paused</p>
              <p className="text-sm text-[#8b949e]">Press Space to continue</p>
            </div>
          </div>
        )}

        {isGameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#000000BF]">
            <div className="text-center text-white">
              <p className="text-4xl font-bold mb-4">Game Over!</p>
              <button
                onClick={resetGame}
                className="px-6 py-2 rounded-lg transition-colors cursor-pointer bg-[#0969da] text-white hover:bg-[#0550ae]"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-center text-sm text-[#8b949e]">
        <p>Use arrow keys to move</p>
        <p>Press Space to pause</p>
      </div>
    </div>
  );
}