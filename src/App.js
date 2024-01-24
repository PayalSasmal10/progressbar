import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [initBar, setInitBar] = useState(0);
  useEffect(()=>{
    const timerId = setInterval(() => {
      setInitBar((prvBar) => prvBar < 100? prvBar+5: 100);
    }, 2000);

    return () => clearInterval(timerId);
  },[]);

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
          <button>Start</button>
        </section>
    </div>
  );
}

export default App;
