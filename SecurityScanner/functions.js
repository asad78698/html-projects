const input = document.getElementById('geturl')
var scan = document.getElementById('scanning')
let get_value;
var result = document.getElementById('result')

input.addEventListener('input', function(e){

get_value = e.target.value

});

scan.addEventListener('click', function(){


    result.innerHTML = get_value
})

