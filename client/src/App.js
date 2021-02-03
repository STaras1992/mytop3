import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/pages/Home/Home.js';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Home />} />
      </Switch>
    </div>
  );
};

export default App;
