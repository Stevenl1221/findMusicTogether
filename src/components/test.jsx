import './test.css';

export default function something ({moveHandler}) {
return (

<div>

{/* <nav id="siteNav" class="navbar navbar-default navbar-fixed-top affix-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    </div>
  </div>
</nav> */}



<p><button onClick={moveHandler}>Click Me</button></p> 
<a href="https://www.google.com/" class="btn btn-primary btn-lg centered">Better Button</a>
<div id ="container">
  <div id ="animate"></div>
  
    <div class="progress"></div> 

</div>
</div>

)
}
