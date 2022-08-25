
//simple array of words to list the common areas of problem
var select = document.getElementById("selectName");
var option = ["john", "jane", "joe", "jill"];

for (var i = 0; i < option; i++) {
    var opt = option[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
    
}
// simple array of names to display in the select box
var select1 = document.getElementById("selectDepartment");
var option1 = ["john", "jane", "joe", "jill"];

for (var j = 0; j < option; j++) {
    var opt1 = option[j];
    var el1 = document.createElement("option");
    el1.textContent = opt1;
    el1.value = opt1;
    select.appendChild(el1);
    
}

document.querySelector("#show-popup").addEventListener("click", function () 
{
document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function () 
{
document.querySelector(".popup").classList.add("active");
});





