import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/login/login';
import SignupPage from './pages/signup/signup';
import ChatPage from './pages/chat/chat';
import { auth } from './firebase';
import { onAuthStateChanged } from '@firebase/auth';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/chat' component={ChatPage} />
      </Switch>
    </div>
  );
}

export default App;
