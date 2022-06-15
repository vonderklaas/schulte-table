import { GameBoard } from './pages/Game';
import { Navbar } from './components/Navbar';

import { Link, Route } from 'wouter';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Route path='/'>
        <div className={styles.Info}>
          <h1>Shulte</h1>
          <p>
            The Schulte table is a square matrix, in the cells of which numbers
            or letters are randomly placed. It is used as a test to assess the
            current rate of perception of textual information and to study the
            amount of attention.
          </p>
          <h1>How to do it?</h1>
          <p>
            The essence of training with Schulte tables is the development of
            the skill of quickly searching and "capturing" information due to
            the expansion of the field of view. Sequential finding of numbers
            for speed must be performed in compliance with the following
            important rules: Fix your gaze in the center of the table - try to
            look only at the "eye".
          </p>

          <p>
            You need to look for numbers in a silent count, that is, without
            pronouncing them either out loud or to yourself (this is difficult,
            but possible) - ideally. The main thing is not just to find the
            numbers as quickly as possible. Remember that your goal is to learn
            to see simultaneously with the number located in the central cell of
            the table, the numbers located in all four corners of the large
            square.
          </p>

          <p>
            At first it will be very difficult, but over time you will
            understand that this is how you can develop the ability to find all
            the numbers 2-3 times faster than with normal eye movement.
          </p>
          <h1>Why </h1>
          <ul className={styles.Options}>
            <li>help in the development of concentration skills</li>
            <li>contribute to an increase in the amount of attention</li>
            <li>develop short-term visual memory</li>
            <li>
              expand peripheral vision, and a wider field of view reduces the
              search time for valuable semantic parts of the text
            </li>
            <li>
              increase the speed of visual perception of information and
              contribute to an increase in reading speed
            </li>
          </ul>
        </div>
      </Route>
      <Route path='/game' component={GameBoard} />
    </div>
  );
};

export default App;
