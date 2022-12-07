import react from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return(
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.navbar}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile  state={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path='/dialog/*'  element={<Dialog state={props.state.dialogPage} dispatch={props.dispatch} />} />
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
