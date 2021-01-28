const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");

// Syntax to catch an event on the bubbling phase
// div.addEventListener("click", function (event) { alert("Clicked on div") } );

div1.addEventListener("click", function (event) { alert("Clicked on div 1") });
div2.addEventListener("click", function (event) { alert("Clicked on div 2") });
div3.addEventListener("click", function (event) { alert("Clicked on div 3") });
