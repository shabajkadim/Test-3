import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import ReduxReducer from './components/reduxReducer';

function App() {
  return (
    <div>
      <Routes>
       
        <Route path='reduxrouter' element={<ReduxReducer/>} />
      </Routes>
    </div>
  );
}

export default App;
