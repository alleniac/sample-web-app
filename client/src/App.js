import logo from './logo.svg';
import './App.css';
import { Button } from "@material-ui/core"
import { useState } from 'react';

function App() {
  const [info, setInfo] = useState(null);

  function onFetchButtonClicked() {
    fetch('/api/info')
      .then(res => res.json())
      .then(payload => setInfo(payload));
  }

  function onClearButtonClicked() {
    setInfo(null);
  }

  return (
    <div className="App">
      <p>Hello</p>
      <Button variant="contained" color="primary" onClick={onFetchButtonClicked}>Fetch</Button>
      <Button variant="contained" color="primary" onClick={onClearButtonClicked}>Clear</Button>
      {
        info && 
          <p>
            {`Name: ${info.name}`}
            <br/>
            {`Position: ${info.position}`}
          </p>
      }
    </div>
  );
}

export default App;
