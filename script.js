
var a = 2;                                            // single line comment,  /* multi line comment */.
var b = 5;                                           //onLoad
var c = "April";                                           
var d = "";
var e = true;                                                                               //var a = 2; re-assign & re-declare.
var f = false;                                                                              // let a = 2; re-assigned / updated, not re-declared.
var g = 25  + " " + "Tuesday";                                                            //const a = 2; not re-declared or re-assigned/updated.

var ex = document.getElementById('s');
ex.textContent=a;

var exa = document.getElementById('t').textContent=b;

var exb = document.getElementById('u').textContent=c;

var exc = document.getElementById('v').textContent=d;

var exd = document.getElementById('w').textContent=e;

var exe = document.getElementById('x').textContent=f;

var exf = document.getElementById('y').textContent=g;





var cal = a*b;
var cala = a/b;
var calb = a+b;
var calc = a-b;
var cald = a+b*a;     // JavaScript calculate * & /  before + & -, () to over rule JavaScript.
var cale = b+a/a;
var calf = (a+b)*a;
var calg = a+(b/a);
console.log(calg);

                                                                                         //DOM   Document Object Model.

//5 Link to Content of File.

//document.getElementById('').textContent=calg;
// var x = document.getElementsByClassName('one');            //JavaScript last file loaded, line of code line 8 else  press button after loading webpage.
//x[0].className='two';                                                              //Written  as List weither List or not  
//document.getElementsTagName('')[0].className='';         
//document.querySelector('').className='';
//document.querySelectorAll('').className='';


var click =document.getElementById('btn').addEventListener('click', clicked, false);


function clicked(){


 var x = document.getElementsByClassName('one');
x[0].className='two'; 

}
















 


