import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateAccount from './components/CreateAccount';
import Signin from './components/Signin';
import Main from './components/Main';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Main />} />
      <Route path='/signup' element={<CreateAccount />} />
      <Route path='login' element={<Signin />} />
    </Routes>
  );
}

export default App;
