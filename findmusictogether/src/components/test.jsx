import './test.css';

export default function something ({moveHandler}) {
return (

<div>
<p><button onClick={moveHandler}>Click Me</button></p> 

<div id ="container">
  <div id ="animate"></div>
</div>
</div>

)
}
