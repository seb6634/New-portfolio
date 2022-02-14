import React, { useState } from "react";
import * as Icon from 'react-feather';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Portfolios from "./pages/Portfolios";

function App() {
  const [lightMode, setLightMode] = useState(false); 

  lightMode ? document.body.classList.add('light') : document.body.classList.remove('light');

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
      document.body.classList.add('light')
    } else {
      setLightMode(false);
      document.body.classList.remove('light')
    }
  }

  return (
    <BrowserRouter>
      <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button className={lightMode ? 'light-mode-switch active' : 'light-mode-switch'} onClick={() => handleMode()}></button>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home lightMode={lightMode}/>
        </Route>
        <Route path="/about" component={About} />
        <Route path="/portfolios" component={Portfolios} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
