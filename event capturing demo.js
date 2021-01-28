const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");

// Syntax to catch an event on the capturing phase
// div.addEventListener("click",
//     function (event) { alert("Clicked on div") }, { capture: true }
// );

// using "true" is an alias to { capture: true }

div1.addEventListener("click", function (event) { alert("Clicked on div 1") }, true);
div2.addEventListener("click", function (event) { alert("Clicked on div 2") }, true);
div3.addEventListener("click", function (event) { alert("Clicked on div 3") }, true);
