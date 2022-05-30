import './App.css';
import Home from './components/Home';
import Pollution from './components/Pollution';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Home />
      <Weather />
      <Pollution />
    </div>
  );
}

export default App;
