import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FirstBlock from "./Compenent/FirstBlock"
import DisplayVideo from "./Compenent/DisplayVideo"

const App = () => {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<FirstBlock/>}/>
            <Route path='video' element={<DisplayVideo/>}/>
            {/* Faire les autres path pour le hamburger */}
          </Routes>
      </Router> 
    </>
  );
}
export default App;