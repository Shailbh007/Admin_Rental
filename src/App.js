import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import './style/style.scss'
import { DarkModeContext } from './context/darkModeContext';
import {
  BrowserRouter

} from "react-router-dom";
import { useContext } from 'react';

function App() {
  const {darkMode}=useContext(DarkModeContext)
  return (
 <div className={darkMode ? "App dark" : "App"}>
    <BrowserRouter>
      <Routes>
       <Route path="/">
       
          <Route index element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path="users">
            <Route index element={<List/>} />
            <Route path=":userId" element={<Single/>} />
            <Route path="new" element={<New/>} />
          </Route>
          <Route path="house">
            <Route index element={<List/>} />
            <Route path=":houseId" element={<Single/>} />
            <Route path="new" element={<New/>} />
          </Route>
      
       </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
