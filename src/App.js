import logo from './logo.svg';
import './App.css';
import PathFinder from './PathFinder/PathFinder';
import Editor from './Editor/MonacoEditor';

function App() {
  return (
    <div className="App">
      <p> Simple Algorithm visualizing program</p>
      <p> this is a common project I wrote in university displaying the shortest path between two points</p>
      <p> you can draw walls to create objects blocking the path and select an algo and watch it solve. </p>
      <PathFinder></PathFinder>
    </div>
  );
}

export default App;
