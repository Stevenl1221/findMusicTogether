import logo from './logo.svg';
import { Welcome } from "./components/findmusictogether";
import './App.css';
import Test from './components/test';



  function App({ age }) {
    return (
      <div className="App">
        <Welcome name="mr steven" age={9 * 2}/>
        <SomeText />
        <MoreText />
        <MoreText />
        <Test moveHandler={myMove} />
      </div>
    );
  }  
  function SomeText() {
    return <p>Steven so cool!</p>
  }
  
  function MoreText() {
    return <p>hi</p>
  }
  
  var id = null;
function myMove() {
  console.log("made it to myMove");
  var elem = document.getElementById("animate");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
  

export default App;
