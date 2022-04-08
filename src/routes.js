import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';


const Routes2 = () =>  
    (
  <BrowserRouter>

    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/feed" element={<Feed/>}/>
    </Routes>

  </BrowserRouter>
  );


export default Routes2;