
import './App.css';

function App() {
 function eventhandler()
 {
  alert("Function called");
 }
  return (
    <div className="App">
      <h1>Welcome to Task5:Event Handling in React</h1>
      <button onClick={eventhandler}>Click me</button>

    </div>
  );
}

export default App;
