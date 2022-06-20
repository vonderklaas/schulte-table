import { useState, useEffect } from 'react';

import styles from './Game.module.css';
import { useTimer } from 'use-timer';

export const GameBoard = () => {
  const initialArr = Array.from({ length: 24 }, (_, i) => i + 1);
  const [table, setTable] = useState(initialArr);
  const [counter, setCounter] = useState(1);
  const [misses, setMisses] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isResults, setIsResults] = useState(false);
  const { time, start, pause, reset } = useTimer();

  useEffect(() => {
    if (counter === 25) {
      endGame();
    }
  }, [counter]);

  const startGame = () => {
    reset();
    start();
    setIsResults(false);
    setIsStarted(true);
    setMisses(0);
    sortTable();
    insertMiddleEl();
  };

  const endGame = () => {
    setIsStarted(false);
    setCounter(1);
    setTable(initialArr);
    pause();
    setIsResults(true);
  };

  const sortTable = () => {
    const shuffled = table.sort(() => (Math.random() > 0.5 ? 1 : -1));
    setTable(shuffled);
  };

  const insertMiddleEl = () => {
    table.splice(12, 0, '👁');
  };

  const replaceElement = (el) => {
    const index = table.indexOf(el);
    table[index] = 'null';
  };

  const handleClick = (e) => {
    const attempt = parseInt(e.target.innerHTML);
    if (attempt === counter) {
      setCounter(counter + 1);
      replaceElement(attempt);
    } else {
      setMisses(misses + 1);
    }
  };

  return (
    <div className={styles.Game}>
      <button
        className={isStarted ? styles.ButtonDisabled : styles.Button}
        disabled={isStarted}
        onClick={startGame}
      >
        {isResults ? <span>Try again?</span> : <span>Start</span>}
      </button>
      {isStarted && (
        <div className={styles.Table}>
          {table.map((num, index) => {
            return (
              <div onClick={handleClick} key={`${num}/${index}`}>
                {num === 'null' ? (
                  <div className={styles.elementRemoved}>{'🍪'}</div>
                ) : (
                  <div className={styles.elementAwaited}>{num}</div>
                )}
              </div>
            );
          })}
        </div>
      )}
      {isStarted && (
        <div className={styles.Timer}>
          <p>⏰ {time} seconds</p>
          <p>Missed clicks {misses}</p>
        </div>
      )}
      {isResults && (
        <>
          <h3>Congratulations!</h3>
          <p>You finished in {time} seconds</p>
          <p>Your have total {misses} missed clicks</p>
        </>
      )}
    </div>
  );
};
