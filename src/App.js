import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/DIalogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='container'>
        <Header/>
        <div className='main'>
          <Navbar/>
          <Routes>
            <Route path='/profile' element={<Profile />}/>
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
