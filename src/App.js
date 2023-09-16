import logo from './logo.svg';
import './App.css';
import {ProgressBar} from "./component/ProgressBar";
import { useEffect, useState } from 'react';

function App() {
  const [completed, setCompleted] = useState(0);

  useEffect(()=> {
    let interval;
    interval = setInterval(() =>setCompleted(Math.floor(Math.random() * 100)+1), 2000);

    return () => clearInterval(interval);
  },[]);
  return (
    <div className="App">
      <ProgressBar completed={completed}/>
    </div>
  );
}

export default App;
