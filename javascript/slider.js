//Slider start 
(function() {
    //get body
    var body, section;
    body = document.getElementById('my_body');
    //craete section tag
    section = document.createElement('section');
    //Append section in body 
    body.appendChild(section);
    //create some basic Elements
    section.innerHTML += `
	<div class="banner">
	 <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        <img src="images/slider/shree-gajmukh-construction-banner-3.png" alt="Los Angeles" style="width:100%;">
      </div>

      <div class="item">
        <img src="images/slider/imagesslidershree-gajmukh-construction-banner-4.jpg" alt="Chicago" style="width:100%;">
      </div>
    
    
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
	</div>`;
})();