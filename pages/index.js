import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      // loggin y dar paso a la siguiente tabla
      window.location.href = '/Table';
    } else {
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Página de inicio de sesión" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="contenedor2">
        <div className="contenedor2">
          <h3>Iniciar Sesión</h3>
          <div3>
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div3>
          <div4>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div4>
          <button2 onClick={handleLogin}>Iniciar Sesión</button2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </main>
    </>
  );
}