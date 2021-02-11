var mybank = function(){
    var body, article04;
    body = document.getElementById('my_body');
    article04 = document.createElement('article');

    body.appendChild(article04);
    article04.setAttribute('class', 'article04');
    article04.innerHTML += '<div class="container"><div class="row"><h4>Our Banking  Partners</h4></div></div>';

    var banks_jason = [{
        bank :"images/icon/sbi_bank.jpg",
    }, {
        bank :"images/icon/lic_bank.jpg",
    },  {
        bank :"images/icon/icici_bank.jpg",
    }, {
        bank :"images/icon/adhar_bank.jpg",
    }];

    for(var i = 0;i<banks_jason.length;i++){
      document.querySelector('.article04>.container>.row').innerHTML +=`
          <div class="col-md-3">
              <div class="my_bank">
                  <img src="${banks_jason[i].bank}" class="img-responsive">
              </div>
          </div>
          <!--//col-md-3-->
      `;
    }
}
mybank();