import './App.css';
//import Clock from './component/Clock';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
