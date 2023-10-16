// Select element by tag name

// we can select any tag like <p>p</>, <h></h> tag.
// when we will select element by tag then all the tags on the webpage will be selected.

let tagSelectedEle = document.getElementsByTagName("p"); // HTMLCollection(2) [li.new-1, li.new-1]

console.log(classSelectedEle);

for (let index = 0; index < tagSelectedEle.length; index++) {
  tagSelectedEle[
    index
  ].innerHTML = `${index} element of the list manipulated by DOM using tag selection`;
}

let divSelection = document.getElementById("div");
let tagSelection = divSelection.getElementsByTagName("h3");

for (let index = 0; index < tagSelection.length; index++) {
  const element = (tagSelection[index].innerHTML =
    "Changed via id and tag name");
}

// Query selector

// Query selector will select the element which will satisfy the condition. It will only select one element with the searched class.
let selectedElement = document.querySelector("p.intro");
console.log(selectedElement);
selectedElement.innerHTML = "Changed";

// Query selector all
let selectedElementAll = document.querySelectorAll("p.intro");
console.log(selectedElementAll); // NodeList(2) [p.intro, p.intro]

for (let index = 0; index < selectedElementAll.length; index++) {
  const element = (selectedElementAll[index].innerHTML = "Changed all ");
}

// Traversing elements

// To traverse to the parent or child node of DOM via a selected element.
// Via this we can select all the element via one element

// Select parent via child
let ele = document.getElementById("intro-1");
let parent = ele.parentElement;
console.log(parent);

// Select child via parent
let ele2 = document.getElementById("intro-x");
let parentNew = ele.firstChild; // ele.lastChild, ele.children, ele.previousElementSibling,  ele.nextElementSibling
console.log(parent, parentNew);

// Same level ones rae siblings
// innerHTML

//Create and append element in JS
let text = document.createTextNode("Hi i am text node");
ele.appendChild(text);
