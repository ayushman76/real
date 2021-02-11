//agent Section Start 
var agent = function() {
    //get body
    var body, article05;
    body = document.getElementById('my_body');
    //craete article tag
    article05 = document.createElement('article');
    //Append section in body 
    body.appendChild(article05);
    //create some basic Elements
    article05.setAttribute('class', 'article05')

    article05.innerHTML += '<div class="container"><div class="row"><h4>Explore Featured Agents</h4></div></div>';

    var agent_jason = [{
        img: 'images/agent/avatar01.jpg',
        name: 'James N. Green',
        Phone: '9828329739',
        mail: 'Jamesgreen@gmail.com'
    }, {
        img: 'images/agent/avatar02.png',
        name: 'Charles T. Hines',
        Phone: '938732638',
        mail: 'charlesthines@gmail.com'
    }, {
        img: 'images/agent/avatar03.jpg',
        name: 'Colin H. Renda',
        Phone: '7823729746',
        mail: 'colinrenda@gmail.com'
    }, {
        img: 'images/agent/avatar04.png',
        name: 'Charles T. Hines',
        Phone: '7823729746',
        mail: 'colinrenda@gmail.com'
    }]
    for (var i = 0; i < agent_jason.length; i++) {
        document.querySelector('.article05>.container>.row').innerHTML += `
            <div class="col-md-3">
                <div class="agent">
                    <img src="${agent_jason[i].img}" class="pad-10">
                    <p class="price">${agent_jason[i].name}</p>
                    <div class="pad-10 ">
                    <span><a href="tel:${agent_jason[i].Phone}"><i class="fa fa-phone" style="font-size:24px;color: rgb(0 0 0 / 73%);"></i></a></span>&nbsp;&nbsp;&nbsp
                    <span><a href="sms:${agent_jason[i].Phone}"><i class="material-icons" style="font-size:24px;color: rgb(0 0 0 / 73%);">sms</i></a></span>&nbsp;&nbsp;&nbsp
                    <span><a href="mailto:${agent_jason[i].mail}"><i class="fa fa-envelope-o" style="font-size:24px;color: rgb(0 0 0 / 73%);"></i></a></span>
                    </div>
                </div>
            </div>
        `;
    }

}
agent();