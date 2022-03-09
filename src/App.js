import logo from './logo.svg';
import './App.css';
import PathFinder from './PathFinder/PathFinder';

function App() {
  return (
    <div className="App">
      <p>Draw a wall by clicking on the grid, you can then visualize the path that the green block will find the target</p>
      <PathFinder></PathFinder>
    </div>
  );
}

export default App;
