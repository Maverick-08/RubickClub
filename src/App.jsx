import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Home } from "./pages/Home";
import { Teams } from "./pages/Teams";
import { Members } from "./pages/Members";
import Events from "./pages/Events";
import About from "./pages/About";
import { Photos } from "./pages/Photos";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/Teams" Component={Teams}></Route>
          <Route path="/Members" Component={Members}></Route>
          <Route path="/Events" Component={Events}></Route>
          <Route path="/About" Component={About}></Route>
          <Route path="/Photos" Component={Photos}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
