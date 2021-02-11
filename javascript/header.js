//header start 
(function() {
    //       get body
    var body, header;
    body = document.getElementById('my_body');
    //craete Header tag
    header = document.createElement('header');
    //Append header in body 
    body.appendChild(header);
    //create some basic Elements
    header.innerHTML += '<div class="container"><div class="row"></div><!--//row---></div><!---//container-->'

    //  ceate jaosn
    var header_jason = [{
        // for logo
        logo: 'Real Estate',
    }, {
        //for Contact 
        phone01: '8736329279',
        phone02: '7623232972',
        email: 'shreegajmukh@gmail.com'
    }]

    //decleare jason in elements
    document.querySelector('header>.container>.row').innerHTML += `
         <div class="col-md-4">
            <div class="my_logo">
                <h1 class="color_white"><i class="fa fa-home"></i> ${header_jason[0].logo}</h1>
            </div>
            <!---//my_logo--->
         </div>
        <!--//col-md-4--->
         <div class="col-md-6">
            <div class="header_widget">
                <ul class="navbar-nav nav pull-right pad-10">
                   <li><a href="tel:${header_jason[1].phone01}"><i class="fa fa-phone"></i> ${header_jason[1].phone01}</a></li>
                   <li><a href="tel:${header_jason[1].phone02}"><i class="fa fa-phone"></i> ${header_jason[1].phone02}</a></li>
                   <li><a href="${header_jason[1].email}"><i class="fa fa-envelope-o"></i> ${header_jason[1].email}</a></li>
                </ul>
            </div>
         <!---//header_widget--->
		  <div class="menu" onclick="my_menu()">
	        <div class="first"></div> 
	        <div class="sec"></div>
	           
	     </div>
         </div>
         <!--//col-md-6--->
    `;



})();