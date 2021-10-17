var r=0;
var g=0;
var b=0;
var buttonRed,buttonGreen,buttonBlue;
function setup() {
  createCanvas(400,400);
  buttonRed=createButton("red")
  buttonRed.position(100,50)
  buttonRed.mousePressed(redbg)
  
  buttonBlue=createButton("blue")
  buttonBlue.position(150,50)
  buttonBlue.mousePressed(bluebg)

  buttonGreen=createButton("green")
  buttonGreen.position(200,50)
  buttonGreen.mousePressed(greenbg)
}


function draw() 
{
  background(r,g,b);
  
 


}
function redbg(){
  console.log("red")
r=255 
g=0
b=0

}

function bluebg(){
  
r=0
g=0
b=255

}

function greenbg(){

r=0
g=255
b=0

}

