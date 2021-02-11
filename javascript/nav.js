//nav start 
(function() {

    //get body
    var body, nav;
    body = document.getElementById('my_body');
    //craete nav tag
    nav = document.createElement('nav');
    //Append header in body 
    body.appendChild(nav);
    //create some basic Elements
    nav.innerHTML += `<div class="container"><div class="row"><div class="col-md-12"><div class="navigation"><ul class="navbar-nav nav"></ul></div><!--//navigation--></div><!--//col-md-12--></div><!--/row--></div></div><!--//container>`;

    //     creating jaosn for navigation
    var nav_jaosn = [{
        // for navigaton button
        nav01: 'Home',
        nav02: 'About',
        nav03: 'Our Projects',
        nav04: 'Current projects',
        nav05: 'Our Gallery',
        nav06: 'Contact Us'
    }, {
        //for link
        link01: 'index.html',
        link02: 'about.html',
        link03: 'projects.html',
        link04: 'current_project.html',
        link05: 'gallery.html',
        link06: 'contact.html'

    }]


    document.querySelector('nav>.container>.row>.col-md-12>.navigation ul').innerHTML += `
               <li><a href="${nav_jaosn[1].link01}">${nav_jaosn[0].nav01}</a></li>
               <li><a href="${nav_jaosn[1].link02}">${nav_jaosn[0].nav02}</a></li>
               <li><a href="${nav_jaosn[1].link03}">${nav_jaosn[0].nav03}</a></li>
               <li><a href="${nav_jaosn[1].link04}">${nav_jaosn[0].nav04}</a></li>
               <li><a href="${nav_jaosn[1].link05}">${nav_jaosn[0].nav05}</a></li>
               <li><a href="${nav_jaosn[1].link06}">${nav_jaosn[0].nav06}</a></li>
           `;
})()