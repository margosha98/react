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
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/public/Preloader/Preloader';


class App extends React.Component  {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized)  {return  <Preloader />}
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
              <Route path='/login' element={<Login />} />
              <Route path='/users' element={<UsersContainer />} />
              
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect (mapStateToProps, {initializeApp}) (App)


