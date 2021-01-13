// use parent/chiled to put evertthing in a div that has padding ???
// L (the perpul spinny) does not work !!!!!!!

let arrClass = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j" , "m", "n", "o", "p","k","l"]
let arrFunc =[
  funca,
  funcb,
  funcc,
  funcd,
  funce,
  funcf,
  funcg,
  funch,
  funci,
  funcj,
  funcl,
  funcm,
  funcn,
  funco, 
  funcp,
  funck
  
]


function setup() {
  //createCanvas(400, 400);
  noCanvas();
  for(var i =0; i < arrClass.length; i++){
    createElement("button", "this is a button");
    
    

  }
  
  E = createElement("h3", "");
  E.position(300,300);
  
  // for extra space 
  createElement("p","</br></br></br> ");
  
}
let num = 0;

function draw() {
  var thing = selectAll("button");
  
  for(var i = 0; i < thing.length ; i++){
    
    num = i;
    
    thing[i].mouseClicked(arrFunc[i]);
    
    thing[i].class(arrClass[i]);
    
    
  }
  


}

 


function funca() {
  let str = 

".a{ </br>font-size: 20px;</br>background: #660066;</br>color:#e60073;</br>padding: 10 px</br>}</br>.a:hover{</br>box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);</br>}"

  E.remove();
  E = createElement("h3",str);
  E.position(300,300);
}


function funcb() {
  let str = ".b{</br>font-size: 20px;</br>background:#ff1a1a;</br>color:#000000;</br>padding: 10 px;</br>}</br>.b:hover{</br>box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);</br>}</br>"
  E.remove();
  E = createElement("h3",str);
  E.position(300,300);
}

function funcc() {
  let str = ".c{</br>font-size: 20px;</br>background:#3333ff;</br>color:#000000;</br>padding: 0 px;</br>}</br>.c:hover{</br> box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);</br>}"
  E.remove();
  E = createElement("h3",str);
  E.position(300,300);
}
function funcd(){
  
    let str = 
".d{</br>font-size: 20px;</br>background:#000000;</br>color:#ff1a1a;</br>padding: 0 px;</br>}</br>.d:hover{</br>box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);</br>}"
  E.remove(); 
  E = createElement("h3",str);
  E.position(300,300);  
}
function funce(){
  
    let str = ".e{</br>font-size: 20px;</br>color:#00264d;</br>background: #ff751a;</br>padding: 5px 5px; </br>}</br>.e:hover{</br>box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);</br>}"
  E.remove(); 
  E = createElement("h3",str);
  E.position(300,300);  
}


function funcf(){
  
    let str = ".f{</br>font-size: 20px;</br>background: #660066;</br>color:#e60073;</br>padding: 5 px;</br>border-radius: 8px;</br>}</br>.f:hover{</br>font-size: 22px;</br>background: #e60073;</br>color:#660066 ;</br>}"
  E.remove(); 
  E = createElement("h3",str);
  E.position(300,300);  
}




function funcg(){
  
  let str = ".g{</br>font-size: 20px;</br>background:#ff1a1a;</br>color:#000000;</br>padding: 5 px;</br>border-radius: 8px;</br>}</br>.g:hover{</br>font-size: 22px;</br>background: #000000;</br>color:#ff1a1a;</br>}"
  E.remove(); 
  E = createElement("h3",str);
  E.position(300,300);  
}

function funch(){
  
  let str = ".h{</br>font-size: 20px;</br>background:#3333ff;</br>color:#000000;</br>padding: 0 px;</br>border-radius: 8px;</br>}</br>.h:hover{</br>font-size: 22px;</br>box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);</br>background:#000000;</br>color:#3333ff;</br>}"
  E.remove(); 
  E = createElement("h3",str);
  E.position(300,300);  
}


function funci(){
  
  let str = ".i{</br>font-size: 20px;</br>color:#00264d;</br>background: #ff751a;</br>padding: 5px;</br>}</br>.i:hover{</br>box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);</br>color:#ff751a;</br>background: #00264d;</br>}"
  E.remove(); 
  E = createElement("h3",str);
  E.position(300,300);  
}


function funcj(){
  
  let str = 
".j{</br>font-size: 20px;</br>background:#000000;</br>color:#ff1a1a;</br>padding: 0 px;</br>border-radius: 12px;</br>}</br>.j:hover{</br>color:#000000;</br>background:#ff1a1a;</br>}"
  E.remove(); 
  E = createElement("h3",str);
  E.position(300,300);  
}

function funck(){
  
  let str = 

".k{</br>font-size: 20px;</br>color:#00264d;</br>background: #ff751a;</br>padding: 16px 8px;</br>border-radius: 50%;</br>}</br>.k:hover{</br>box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);</br>color:#ff751a;</br>background: #00264d;</br>}</br>.k:hover{</br>animation-name: spinK;</br>animation-duration: 5000ms;</br>animation-iteration-count: infinite;</br>animation-timing-function: linear; </br>}</br>@keyframes spinK {</br>from {</br>transform:rotate(0deg);</br>background-color: #ff751a;</br>}</br>to {</br>transform:rotate(1000deg);</br>background-color: #00264d;</br>}</br>}";
  E.remove(); 
  E = createElement("h3",str);
  print(".     k");
  E.position(300,300);  
}

function funcl(){
  print(".   l");
  let str = ".l{</br>font-size: 20px;</br>background:#000000;</br>color:#000000;</br>padding: 0 px;</br>border-radius: 12px;</br>}</br>.l:hover{</br> color:#ff1a1a;</br>}"
  E.remove(); 
  E = createElement("h3",str);
  E.position(300,300);  
}
function funcm(){
  print(".   m");
  let str = ".m{</br>font-size: 20px;</br>background: #660066;</br>color:#e60073;</br>padding: 16px 8px;</brborder-radius: 50%;</br>}</br>.m:hover{</br>box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);</br>}</br>.m:hover{</br>color:#660066;</br>animation-name: spinM;</br>animation-duration: 5000ms;</br>animation-iteration-count: infinite;</br>animation-timing-function: linear; </br>}</br>@keyframes spinM {</br>from {</br>transform:rotate(0deg);</br>background-color: #660066;</br>}</br>to {</br>transform:rotate(1000deg);</br>background-color: #e60073;</br>}</br>}"
  E.remove(); 
  E = createElement("h3",str);
  E.position(300,300);  
}


function funcn(){
  print(".   n");
  let str = ".n{</br>font-size: 20px;</br>background:#ff1a1a;</br>color:#000000;</br>padding: 16px 8px;</br>border-radius: 50%;</br>}</br>.n:hover{</br>color:#ff1a1a;</br>box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);</br>}</br>.n:hover{</br>animation-name: spinN;</br>animation-duration: 5000ms;</br>animation-iteration-count: infinite;</br>animation-timing-function: linear; </br>}</br>@keyframes spinN {</br>from {</br>transform:rotate(0deg);</br>background-color: #ff1a1a;</br>}</br>to {</br>transform:rotate(1000deg);</br>background-color: #000000;</br>}</br>}"
  E.remove(); 
  E = createElement("h3",str);
  E.position(300,300);  
}

function funco(){
  print(".   o");
  let str = ".o{</br>font-size: 20px;</br>background:#3333ff;</br>color:#000000;</br>padding: 16px 8px;</br>border-radius: 50%;</br>}</br>.o:hover{</br>color:#3333ff;</br>box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);</br>}</br>.o:hover{</br>animation-name: spinO;</br>animation-duration: 5000ms;</br>animation-iteration-count: infinite;</br>animation-timing-function: linear; </br>}</br>button{</br>display:block</br>}</br>@keyframes spinO {</br>from {</br>transform:rotate(0deg);</br>background-color: #3333ff;</br>}</br>to {</br>transform:rotate(1000deg);</br>background-color: #000000;</br>}</br>}";
  E.remove(); 
  E = createElement("h3",str);
  E.position(300,300);  
}

function funcp(){
  print(".  p");
  let str = ".p{</br>font-size: 20px;</br>background:#000000;</br>color:#ff1a1a;</br>padding: 16px 8px;</br>border-radius: 50%;</br> }</br>.p:hover{</br>color:#000000;</br>box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);</br>}</br>.p:hover{</br>animation-name: spinP;</br>animation-duration: 5000ms;</br>animation-iteration-count: infinite;</br>animation-timing-function: linear; </br>}</br>@keyframes spinP {</br>from {</br>transform:rotate(0deg);</br>background-color: #000000;</br>}</br>to {</br>transform:rotate(1000deg);</br>background-color: #ff1a1a;</br>}</br>}</br>button {</br>display: block;</br>}";
  E.remove(); 
  E = createElement("h3",str);
  E.position(300,300);  
}



