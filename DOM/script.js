//DOM inbuilt methods
//DOM: document object model
//how to create any html elements dynamically
//by using syntax :       Document.createElement('element name');
//result will give an HTML element like <elename></elename>

let division = document.createElement("div");
//Creates div element dynamically and assign to division variable. document respresents the whole portion .
//<div></div>
division.innerHTML = "this is dynamic div";
//<div>This is dynamic div</div>
document.body.append(division);
//document is whole selected session , .body is body of tag, append is to insert the element inside the body.
//append is used to add the element in the body .
//Dom will first run the static element then dynamic elements.
let spanElement = document.createElement("span");
spanElement.innerHTML = "This is span ";
document.body.append(spanElement);
//document.body.append(division,spanElement) to print both elements in same line
//innerHTML is a property . it is used to add a content inside the html element.
//to create nested tags we can use innerHTML
let spanElement1 = document.createElement("span");
spanElement1.innerHTML = "<div>This is span div</div>";
document.body.append(spanElement1);
// if it have any html element also it will parse.

//inner text:property
// is to add content inside the html element
//if it have any html element also it will not parese. it will consider as text.
let spanElement2 = document.createElement("span");
spanElement2.innerText = "<div>This is span div</div>";
document.body.append(spanElement2);

//how to apply styling :
let spanElement3 = document.createElement("span");
spanElement3.innerHTML = "This is span ";
spanElement3.style.backgroundColor = "red";
spanElement3.style.fontFamily = "Courier";
document.body.append(spanElement3);
//inline CSS:
//using elementname.style.attributename="value";

// To use classname, idname: attributes
//set attribute('attribute name','value')
//<span class="main">This is class span</span> to create this  in dom
let a = document.createElement("div");
a.innerHTML = "this is class a div";
a.setAttribute("class", "main");
a.setAttribute("id", "main1");
document.body.append(a);

//instead of set attribute if we need to include class we can use classname

let b = document.createElement("div");
b.innerHTML = "this is class b div";
b.className = "main";
document.body.append(b);

//<div class="container">
//<div class="row">
//<div class="col-1">This is div</div></div></div>
//to add nested  elements.
let div1 = document.createElement("div");
div1.className = "container";

let div2 = document.createElement("div");
div2.className = "row";

let div3 = document.createElement("div");
div3.className = "col-1";

div2.append(div3);
div1.append(div2);
document.body.append(div1);

//To extract the existing html div element.
//Print those elements in console.
//Note: element must be there in your html file.If the file is not there this method will not work.
//document.getElementById(),document.getElementByClassname(),document.getElementByTagname()

let res = document.getElementById("main");
console.log(res);
//Result will be in console.if not it will print null in console.
//to print only the content

function foo() {
  let res1 = document.getElementById("main").value;
  console.log(res1);
}

let res2 = document.getElementsByClassName("main");
console.log(res2);
//output of this method is array
//to extract certain classes
//id will give /return only one html element but in classname it will return the array
//id will be used in form validation bcz of unique id.
