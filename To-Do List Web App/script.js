var getData = document.getElementById('search');
var getInput;
var button = document.getElementById('btn');
var del = document.getElementById('delete');



getData.addEventListener('input', function(e) {
  getInput = e.target.value;

});



function asad (){

var node = document.createElement('div');
var card = document.querySelector('.card');
var node1 = document.createElement('span');
var node2 = document.createElement('button');
var addlisttext = document.createTextNode(getInput);
var buttontext = document.createTextNode('Delete');
node.className = 'Second-Part';
node1.className = 'addlist';
node2.id = 'delete';


  card.appendChild(node);
  node1.appendChild(addlisttext);
  node.appendChild(node1);
  node2.appendChild(buttontext)
  node.appendChild(node2);

  node2.addEventListener('click', function(){

    node.remove();
  })

 
};

button.addEventListener('click',function(){


  asad ();
 
  getData.value = " ";

});



