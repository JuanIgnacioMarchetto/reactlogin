// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
   
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Nombre de usuario o contraseña incorrectos.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const MainFunction = () => {
    return (
      <div>
        <h1>Bienvenido, {username}!</h1>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    );
  };

  const LoginForm = () => {
    return (
      <div>
        <h2>Iniciar Sesión</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </div>
    );
  };

  return (
    <div className="App">
      {isLoggedIn ? <MainFunction /> : <LoginForm />}
    </div>
  );
}

export default App;

