import './App.css';
import React from 'react';
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Dialogs from "./Dialogs/Dialogs";
import Posts from "./Posts/Posts";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Header/>
              <Menu />
              <Routes>
                  <Route path='dialogs' element={<Dialogs/>}/>
                  <Route path='posts' element={<Posts/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
