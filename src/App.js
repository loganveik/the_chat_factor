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
        <Route exact path='/' component={loginPage}/>
        {/* <Route path='/signup' component={signupPage}/>
        <Route path='create' component={createPage}/>
        <Route path='library' component={libraryPage}/> */}
      </Switch>
    </div>
  );
}

export default App;
