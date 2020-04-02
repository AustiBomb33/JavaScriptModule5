navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

// Create a new list item when clicking on the "Add" button
function newListElement(){
  let newLI = document.createElement("LI");
  let liValue = document.getElementById('inputarea').value;
  let text = document.createTextNode(liValue);
  newLI.appendChild(text);

  if(liValue == ""){
    alert("Nothing was written");
  } else {
    document.getElementById('list').appendChild(newLI);
    document.getElementById('inputarea').value = "";
  }
}

//delete a list item
function delListElement(){
  let itemToDelete = document.getElementById('deletetextbox').value - 1;
  let listItems = document.getElementsByTagName('li');
  if(listItems[itemToDelete] == undefined){
    alert("you must enter a number to delete");
    document.getElementById('deletetextbox').value = "";
  } else {
    listItems[itemToDelete].parentNode.removeChild(listItems[itemToDelete]);
    document.getElementById('deletetextbox').value = "";
  }
}

//click event for list items
let list = document.getElementById('list');
list.addEventListener("click", function(e){
  clickEvent(e);
});

let listItems = document.getElementsByTagName("li");

function clickEvent(e){
  vibrate(200);
  if(e.target.style.textDecoration == ""){
    e.target.style.textDecoration = "line-through";
  } else {
    e.target.style.textDecoration = "";
  }
}
//checks for enter key with event add area
function checkKeyAdd() {
  let key = window.event.keyCode;
    // If the user has pressed enter
  if (key === 13) {
    newListElement();
    window.navigator.vibrate(200);
  }
}

//checks for enter key with event delete area
function checkKeyDel() {
    let key = window.event.keyCode;
    // If the user has pressed enter
    if (key === 13) {
        delListElement();
      window.navigator.vibrate(200);
    }
}

function vibrate(time){
  window.navigator.vibrate(time);
}
