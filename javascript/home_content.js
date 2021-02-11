var serv = function() {
    var body, article01;
    body = document.getElementById('my_body');
    article01 = document.createElement('article');

    body.appendChild(article01);
    article01.setAttribute('class', 'article01');

    article01.innerHTML += '<div class="container"><div class="row"></div></div>';

    var service = [{
        img: 'images/icon/b3ccd57b054a73af1a0d281265b54ec8-removebg-preview.png',
        name: 'Buy Home',
        link: 'projects.html'
    }, {
        img: 'images/icon/free-home-sale-icon-2497-thumb.png',
        name: 'Sell Home',
        link: 'contact.html'
    }, {
        img: 'images/icon/rental-property-55-removebg-preview.png',
        name: 'Rent Home',
        link: 'projects.html'
    }, {
        img: 'images/icon/online-support.png',
        name: 'Support',
        link: 'contact.html'
    }]


    for (var i = 0; i < service.length; i++) {
        document.querySelector('.article01>.container>.row').innerHTML += `
     <div class="col-md-3">
         <div class="my_service text-center">
             <a href="${service[i].link}">
                 <img src="${service[i].img}">
                 <p>${service[i].name}</p>
             </a>
         </div>
     </div>
`;
    }
}
serv();


var well = function() {
    var body, article03;
    body = document.getElementById('my_body');
    article03 = document.createElement('article');

    body.appendChild(article03);
    article03.setAttribute('class', 'article03');
    article03.innerHTML += '<div class="container"><div class="row"></div></div>';

    var well_content = [{
        heading: 'Welcome To Real Estate Company',
        para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
        list: 'Home for sell',
        list01: 'Home for rent',
        list03: 'Home for Buy',

    }, {
        img: 'images/house-garden-transparent-png-stickpng-31.png'
    }]

    document.querySelector('.article03>.container>.row').innerHTML += `
        <div class="col-md-6">
           <div class="my_about">
               <h3>${well_content[0].heading}</h3>
               <p>${well_content[0].para}</p>
               <ul class="nav">
                  <li><a>${well_content[0].list}</a></li>
                  <li><a>${well_content[0].list01}</a></li>
                  <li><a>${well_content[0].list03}</a></li>
               </ul>
           </div>
        </div>
        <!--//col-md-6-->
        <div class="col-md-6">
            <div class="my_content">
               <img src="${well_content[1].img}" class="img-responsive">
            </div>
        </div>
        <!--//col-md-6-->
    `;


}
well();


