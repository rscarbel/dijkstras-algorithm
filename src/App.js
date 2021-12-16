import GraphDisplay from './components/GraphDisplay';
import './App.css';
import TopBar from './components/TopBar';

function App() {

  return (
    <div className="App">
        <div className='relative-container'>
          <TopBar />
          <GraphDisplay />
      </div>
    </div>
  );
}

export default App;
