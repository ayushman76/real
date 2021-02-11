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
    section.innerHTML += '<div class="my_banner"><div class="container"><div class="row"></div></div></div>';
	
	
	var slide = [{
		img:'images/slider/slide.png',
		heading:'Real Estate Company',
		para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient mondolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient mon',
	}]
	
	document.querySelector('section>.my_banner>.container>.row').innerHTML+=`
	
	<div class="col-md-6">
	    <div class="my_slid pad-10">
		 <h2 class="color_sky">${slide[0].heading}</h2>
			<p class="pad-10"><b>${slide[0].para}</b></p>
		    
		</div>
	</div>
	<!--//col-md-6-->
	<div class="col-md-6">
	    <div class="my_slid pad-10">
<img src="${slide[0].img}" class="img-responsive pad-10">
		</div>
	</div>
	<!--//col-md-6-->
	`;
	
})();