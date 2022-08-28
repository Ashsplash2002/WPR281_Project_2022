

function submitticket(){
hidepopup();
}
function hidepopup(){
    document.getElementsByClassName('popup')[0].style.display = "none";
}
function showpopup(){
    document.getElementsByClassName('popup')[0].style.display = "block";
}


//simple array of words to list the common areas of problem
var select = document.getElementById("selectName");
var option = ["john", "jane", "joe", "jill"];

for (var i = 0; i < option; i++) {
    var opt = option[i];
    var el = document.createElement("option");
    el.innerHTML = opt;
    el.value = opt;
    select.appendChild(el);
    
}









