import './App.css';
import { Switch, Route } from 'react-router-dom';
import loginPage from './pages/login/login';
import signupPage from './pages/signup/signup';
import createPage from './pages/create/create';
import libraryPage from './pages/library/library';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={}/>
        <Route path='/signup' component={}/>
        <Route path='create' component={}/>
        <Route path='library' component={}/>
      </Switch>
    </div>
  );
}

export default App;
