import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./style.css";

import Gugudan from "./Gugudan";
import EndTalk from "./EndTalk";

const App = () => {
  return (
      <div className="wrap">
        <BrowserRouter>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Gugudan">Gugudan</Link></li>
            <li><Link to="/EndTalk">EndTalk</Link></li>
          </ul>

          <hr></hr>

          <div>
            <Routes>
              <Route path="/" exact={true}></Route>
              <Route path="/Gugudan" element={<Gugudan/>}></Route>
              <Route path="/EndTalk" element={<EndTalk/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
