import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Redux from './components/Redux-Component/Redux'; 


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='redux' element={<Redux/>} />
      </Routes>
    </div>
  );
}


export default App;
