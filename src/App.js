import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />

        <div className='app-wrapper__content'>

          <Routes>
            <Route path='/profile' element={<Profile  />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
