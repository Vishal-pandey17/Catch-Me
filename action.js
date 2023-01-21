var container=document.getElementById('container');
var box=document.getElementById('box');

var xyz=container.getBoundingClientRect();
console.log(xyz);

let w=700;
let h=520;

function rand(n)
{
    return Math.floor((Math.random()* n));
}




box.addEventListener('mouseover', function()
{

    console.log("mouse")
    let newheight=rand(520);
let newwidth=rand(700);

console.log(newwidth);
console.log(newheight);

box.style.marginTop=newheight+'px';
box.style.marginLeft=newwidth+'px';
})