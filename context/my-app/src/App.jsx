import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
       
      </Routes>
    </div>
  );
}


export default App;
