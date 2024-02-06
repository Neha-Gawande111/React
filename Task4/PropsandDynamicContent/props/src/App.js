import React,{useState} from 'react'
import Message from './Message';
import './App.css';

function App() {
  const [message,setMessage]=useState("Have a good day")
  return (
    <div className="App">
      <h1>Props in React</h1>
      <Message message={message} name="Neha"/>
      <button onClick={()=>{setMessage("Good Morning")}}>Update Message</button>
     
      {/* <Message message={"Good Evening"} name="Smita"/>
      <Message message={"Good Afternoon"} name="Radha"/> */}
    </div>
  );
}

export default App;
