import React, { Suspense } from 'react';
import './App.css';
import UsersContainer from './Components/Users/UsersContainer.jsx';
import News from './Components/News/News.jsx';
import Music from './Components/Music/Music.jsx';
import Settings from './Components/Settings/Settings.jsx';
import NavbarContainer from './Components/Navbar/NavbarContainer.jsx';
//import ProfileContainer from './Components/Profile/ProfileContainer.jsx';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
//import DialogsContainer from './Components/Dialogs/DialogsContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { initializeApp } from './redux/App-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './Components/Common/Preloader/Preloader';
import store from './redux/redux-store.js'
import { Provider } from 'react-redux';
import { WithSuspense } from './HOC/withSuspence';

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer.jsx'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
       
        <HeaderContainer />
        <Route render={() => <NavbarContainer />} />
        <div className='app-wrapperContent'>
          < Route path='/dialogs' render={WithSuspense (DialogsContainer)}/>
          < Route path='/profile/:userId?' render={WithSuspense (ProfileContainer)}/>
          < Route path='/News' render={() => <News />} />
          < Route path='/Music' render={() => <Music />} />
          < Route path='/Settings' render={() => <Settings />} />
          < Route path='/Users' render={() => <UsersContainer />} />
          < Route path='/login' render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const SocualApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
    </BrowserRouter>
}

export default SocualApp;

