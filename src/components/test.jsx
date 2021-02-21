import './test.css';

export default function something ({moveHandler}) {
return (

<div>

<nav class="navbar navbar-default navbar-fixed-top affix-top" id="siteNav" role="navigation">
  <div class="container">
    <div class="navbar-header">
    {/* <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button> */}

    {/* <a class="navbar-brand" href="#">
      <span class="glyphicon glyphicon-fire">
      </span>
      "LOGO"
    </a> */}

    </div>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="nav navbar-nav navbar-right">
        
          <a href="#">Home</a>
        
        
        <a href="#">Products</a>
        
        
        {/* <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          Services 
          <span class="caret"></span>
          </a> */}
       
          <a href="https://linktr.ee/FindMusicTogether">Contact</a>
        
      </ul>
    </div>
  </div>
</nav>    

<div class="icon-bar">
  <a href="#" class="facebook"><i class="fa fa-facebook"></i></a> 
  <a href="#" class="twitter"><i class="fa fa-twitter"></i></a> 
  <a href="#" class="google"><i class="fa fa-google"></i></a> 
  <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
  <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> 
</div>


<a href="https://www.spotify.com/us/" class="btn btn-primary btn-lg centered">Click Me!</a>
  
<div class="progress"></div> 

</div>

)
}
