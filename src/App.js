import './App.css';
import {useState} from "react";

function App() {
  const [initBar, setInitBar] = useState(0);
  
   const progressBarStartButtonHandler = () => {
    const timerID = setInterval(() => {
      setInitBar((prvBar) => prvBar < 100? prvBar+10: 100);
    }, 2000);
    return () => clearInterval(timerID);
   };

  const styleProgressBar = {
    width: initBar + "%",
    height: "100%",
    backgroundColor: "green",
  };

  return (
    <div className="App">
      <header className="">
        <h2>This a progress bar</h2>
      </header>
        <section>
          <div className="outer-container">
           <div style={styleProgressBar}>{initBar}%</div>
          </div>
          <button onClick={progressBarStartButtonHandler}>Start</button>
        </section>
    </div>
  );
}

export default App;
