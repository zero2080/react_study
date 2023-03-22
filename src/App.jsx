import { useState } from 'react';
import NavBar from './components/NavBar';
import request from './api/request';
import './style.css';
import {BiTask} from 'react-icons/bi';
function App() {
  const [num, setNum] = useState(0);
  const [list, setList] = useState([]);

  return (
    <div className="background">
     <div className="container">
      <NavBar/>
     </div>
    </div>
  );
}

export default App;