import { useEffect } from "react";
import NavBar from "./Components/NavBar.js";
import NewTextArea from "./Components/NewTextArea.js";
import PreviousNotes from "./Components/PreviousNotes.js";
import CheckingLocal from "./Components/CheckingLocal.js";
import './index.css';

function App() {

  useEffect(() => {
    document.title = 'Notes';
  }, []);
  
  return (
    <div className="container">
      <div className="leftmost--container">
        <PreviousNotes />
      </div>
      <div className="rightmost--container">
        <NavBar />
        <NewTextArea />
      </div>
      <CheckingLocal />
    </div>
  );
}

export default App;
