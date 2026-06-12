import { Buttons } from "./components/Buttons";
import { Inputs } from "./components/Inputs";
import './App.css'
function App(){
  return (
    <div className="app-container"> 
      <p>Hello, Weclome to my website</p>
      <Inputs/>
      <Buttons/>
    </div>
  );
}

export default App
