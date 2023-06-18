
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';

// Router
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const [mode, setMode] = useState('light')
  const [alerts, setAlerts] = useState()
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray'
      showAlert('Dark mode is enable')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode is enable')
    }
  }
  // alert
  const showAlert = (message, type) => {
    setAlerts({
      msg: message,
      type:type
    })
      setTimeout(() => {
        setAlerts(null);
      },1000)
  }
  return (
    <div className="App">
      {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alerts={alerts} />
        {/* <Switch>
        <Route exact path="/about"> */}
          <About />
        {/* </Route>
      </Switch>
      </Router> */}
    </div>
  );
}

export default App;
