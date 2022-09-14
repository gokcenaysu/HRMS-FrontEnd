import { Container } from '@mui/material';
import './App.css';
import Dashboard from './layouts/Dashboard';
import NavBar from '../src/layouts/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar}/>
        <Route exact path="/" component={Home}/>
        <Container>
          <Dashboard/>
        </Container> 
        {/* <Route path="/" component={Footer}/> */}
      {/* <NavBar/>
  <Container>
        <Dashboard className="main"/>
        </Container> */}
    </div>
  );
}

export default App;
