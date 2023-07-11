var screen = document.querySelector('.screen');
var buttons = document.querySelectorAll('.button');
var buttonac = document.getElementById('ac');
var buttonequal = document.getElementById('equal');
let respone


buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        let value = e.target.dataset.num;
        screen.value += value;
        respone = eval(screen.value);
       
    });
});

buttonequal.addEventListener('click', function(e) {
    if (screen.value === "") {
        screen.value = "";
    } else {
        screen.value = respone;
    }
});

buttonac.addEventListener('click', function(){
  
    if(screen.value != ""){

        screen.value="";
    }

})

