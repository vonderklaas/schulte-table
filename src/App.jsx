import { GameBoard } from './pages/Game';
import { Navbar } from './components/Navbar';

import { Route } from 'wouter';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Route path='/'>
        <div className={styles.Info}>
          <p>
            The Schulte table is a square matrix, in the cells of which numbers
            or letters are randomly placed. It is used as a test to assess the
            current rate of perception of textual information and to study the
            amount of attention.
          </p>
          <p>
            The essence of training with Schulte tables is the development of
            the skill of quickly searching and "capturing" information due to
            the expansion of the field of view. Sequential finding of numbers
            for speed must be performed in compliance with the following rule:
            <br />
            <br />
            <b>
              Fix your gaze in the center of the table — try to look only at the
              "eye"
            </b>
          </p>
          <p>
            You need to look for numbers in a silent count, that is, without
            pronouncing them either out loud or to yourself (this is difficult,
            but possible) — ideally. The main thing is not just to find the
            numbers as quickly as possible. Remember that your goal is to learn
            to see simultaneously with the number located in the central cell of
            the table, the numbers located in all four corners of the large
            square. At first it will be very difficult, but over time you will
            understand that this is how you can develop the ability to find all
            the numbers 2-3 times faster than with normal eye movement.
          </p>
          <h1>Why Schulte Tables?</h1>
          <ul className={styles.Options}>
            <li>Practice helps to develop concentration skills</li>
            <li>Doing Schulte increases the amount of attention span</li>
            <li>It helps to develop short-term visual memory</li>
            <li>Progressive expanding of peripheral vision</li>
          </ul>
        </div>
      </Route>
      <Route path='/game' component={GameBoard} />
    </div>
  );
};

export default App;
