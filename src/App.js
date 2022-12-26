import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
// import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogContainer from './components/Dialog/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';
import MusicContainer from './components/Music/MusicContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return(
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer  />
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/' element={<ProfileContainer />} >
              <Route path=':userId' element={<ProfileContainer />} />
            </Route>
            <Route path='/dialog/*'  element={<DialogContainer />} />
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<MusicContainer/>}/>
            <Route path='/settings' element={<Settings/>} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
