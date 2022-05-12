import logo from './logo.svg';
import './App.css';
import Songcard from "./Songcard";

function App() {
  return (
    <div className="App">
   <Songcard
   songtitle= "Cool ass song"
   artist= "Jimmy Walker"
   style= "Rock and Roll"
   chords="['G', 'D', 'Am', 'C', 'Em', 'G/B']"
   />

    </div>
  );
}

export default App;
