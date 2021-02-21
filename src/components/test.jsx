import './test.css';

export default function something ({moveHandler}) {
return (

<div>

<nav class="navbar navbar-default navbar-fixed-top affix-top" id="siteNav" role="navigation">
  <div class="container">
    <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="#">
      <span class="glyphicon glyphicon-fire">
      </span>
      "LOGO"
    </a>
    </div>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="nav navbar-nav navbar-right">
        <li class="active">
          <a href="#">Home</a>
        </li>
        <li>
        <a href="#">Products</a>
        </li>
        <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          Services 
          <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" aria-labelledby="about-us">
							<li><a href="#">Engage</a></li>
							<li><a href="#">Pontificate</a></li>
							<li><a href="#">Synergize</a></li>
					</ul>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>    

<div class="icon-bar">

  <a href="#" class="facebook"><i class="fa fa-facebook"></i>
  <img src="https://bullerockgc.com/wp-content/uploads/2018/05/facebook-logo-png-white-i6.png" alt="instagram" width="45" height="45"></img> </a> 
  
  <a href="#" class="twitter"><i class="fa fa-twitter"></i></a> 

  <a href="#" class="instagram"><i class="fa fa-instagram"></i>
  <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Copy-of-instagram.svg" alt="instagram" width="25" height="25"></img> </a> 
  <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
  <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> 
</div>

  
<div class="progress"></div> 

<div>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
  <link rel="stylesheet" href="social-share.css" />
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
</div>

<ul class="ct-socials">
   <li>
      <a href="/" target="_blank"><i class="fa fa-twitter"></i></a>
   </li>
   <li>
      <a href="/" target="_blank"><i class="fa fa-facebook"></i></a>
   </li>
   <li>
      <a href="/" target="_blank"><i class="fa fa-pinterest"></i></a>
   </li>
   <li>
      <a href="/" target="_blank"><i class="fa fa-linkedin"></i></a>
   </li>
   <li>
      <a href="/" target="_blank"><i class="fa fa-flickr"></i></a>
   </li>
</ul>

</div>
);
}
