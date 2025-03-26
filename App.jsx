import logo from './App.jsx';
import './App.css';
import {useState} from 'react';
import MoodDisplay from "./MoodDisplay";

function App() {
  const [mood,setMood]=useState("");
  return (
    <div className={`container${mood}`}>
      <h1>How are you feeling Today</h1>
      <div className="buttons">
      <button onClick={() => setMood("HAPPY")}> HAPPY😍</button>
        <button onClick={() => setMood("SAD")}> SAD🥲</button>
        <button onClick={() => setMood("HUNGRY")}> HUNGRY🤨</button>
        <button onClick={() => setMood("UGLY")}> UGLY🫥</button>
      </div>
      <MoodDisplay mood={mood}/>
    </div>
  );
  
}
export default App;