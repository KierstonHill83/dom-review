// var list = document.createElement("ul");

// var firstChild = document.createElement("li");
// var word1 = document.createTextNode("I'm the first child!");
// firstChild.appendChild(word1);
// list.appendChild(firstChild);

// var secondChild = document.createElement("li");
// var word2 = document.createTextNode("I'm the second child!");
// secondChild.appendChild(word2);
// list.appendChild(secondChild);

// var thirdChild = document.createElement("li");
// var word3 = document.createTextNode("I'm the third child!");
// thirdChild.appendChild(word3);
// list.appendChild(thirdChild);

// console.log(list);

// document.body.appendChild(list);




// var list = document.createElement("ul");

// for(i = 0; i < 3; i++) {
//   var x = document.createElement("li");
//   var y = document.createTextNode("I'm a child!");
//   x.appendChild(y);
//   list.appendChild(x);
// }

// console.log(list);

// document.body.appendChild(list);

// var a = document.getElementsByTagName('li')[1].innerText = "I be rolling!";
// console.log(a);



function create (){
  var list = document.createElement("ul");
  for(i = 0; i < 3; i++) {
    var x = document.createElement("li");
    var y = document.createTextNode("I'm a child!");
    x.appendChild(y);
    list.appendChild(x);
  }
  document.body.appendChild(list);
}
create();

function changeName () {
  var a = document.getElementsByTagName('li')[1].innerText = "I be rolling!";
}
changeName();

function changeColor () {
  var b = document.getElementsByTagName('li')[2].style.backgroundColor = "red";
}
changeColor();

function click () {
  console.log(document.getElementsByTagName('li')[0].innerText);
}
document.getElementsByTagName('li')[0].addEventListener("click", click);


