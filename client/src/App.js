import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => <Navbar />} />
      </Switch>
    </div>
  );
};

export default App;
