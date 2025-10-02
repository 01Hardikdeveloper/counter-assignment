import logo from './logo.svg';
import './App.css';
import ClassCounter from './ClassCounter';
import FunctionalCounter from './FunctionalCounter';

function App() {
  return (
  <div className="main-container">
    <h1>Assignment-2 Counter Application</h1>
    <div className="components-row">
      <FunctionalCounter />
      <ClassCounter />
    </div>
  </div>
);
}

export default App;
