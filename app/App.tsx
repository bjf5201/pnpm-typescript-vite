import './App.css';

export default function App() {
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <header role="header" className="qwerty-flow">
      <h1>Hello, Vite!</h1>
      <p>API URL: {apiUrl}</p>
    </header>
  );
}
