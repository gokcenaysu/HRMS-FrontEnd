import { Container } from '@mui/material';
import './App.css';
import Dashboard from './layouts/Dashboard';
import NavBar from '../src/layouts/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
  
        <Dashboard className="main"/>
        
    </div>
  );
}

export default App;
