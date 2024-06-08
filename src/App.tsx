import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateAccount from './components/CreateAccount';
import Signin from './components/Signin';

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<CreateAccount />} />
      <Route path='login' element={<Signin />} />
    </Routes>
  );
}

export default App;
