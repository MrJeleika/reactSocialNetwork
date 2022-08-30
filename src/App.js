import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/DIalogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='container'>
        <HeaderContainer/>
        <div className='main'>
          <Navbar/>
          <Routes>
            <Route path='/profile/' element={<ProfileContainer/>}>
              <Route path=':userId' element={<ProfileContainer/>}/>
            </Route>
            <Route path='/dialogs' element={<DialogsContainer />}/>
            <Route path='/users' element={<UsersContainer/>}/>
            {/* <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}> */}
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
