import { useState } from 'react';

import Exercises from './components/Exercises';
import './App.css';

const App = () => {
  const [exercise, setExercise] = useState([
    {
      id: '1',
      title: 'Push-Ups',
      repetitions: 10,
      weigth: 'body'
    },
    {
      id: '2',
      title: 'Sit-ups',
      repetitions: 10,
      weigth: '15kg'
    },
  ]);

  return (
    <>
      <div className='container'>
        <Exercises />
        
      </div>
    </>
  );
}

export default App;
