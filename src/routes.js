import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';
import News from './pages/News';
import Diary from './pages/Diary';
import Chat from './pages/Chat';
import Webinar from './pages/Webinar';
import ProfileConfig from './pages/ProfileConfig';


const Routes2 = () =>  
    (
  <BrowserRouter>

    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/feed" element={<Feed/>}/>
      <Route exact path="/news" element={<News/>}/>
      <Route exact path="/diary" element={<Diary/>}/>
      <Route exact path="/chat" element={<Chat/>}/>
      <Route exact path="/webinar" element={<Webinar/>}/>
      <Route exact path="/config" element={<ProfileConfig/>}/>
    </Routes>

  </BrowserRouter>
  );


export default Routes2;