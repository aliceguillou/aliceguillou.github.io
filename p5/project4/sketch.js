//Position for circle A,B, and C
let circleAX, circleAY;
let circleBX, circleBY;
let circleCX, circleCY;
let circleSize = 50;
let circleAColor;
let circleBColor;
let circleCColor;
let bgColor;

function setup(){
  createCanvas(windowWidth, windowHeight); 


//Initial position for circle A,B, and C
  circleAX = width / 4;
  circleAY = height / 2;
  circleBX = (width / 4) * 3;
  circleBY = height / 2;
  circleCX = width / 2;
  circleCY = height /4;


//Initial Colors
  circleAColor = color("#add8e6");
  circleBColor = color("#ED7637");
  circleCColor = color ("#32CD32");
  bgColor = color("#FFF5EB");


  //Prompt user for their name
  let name = prompt('What Is Your Name?');
  alert(`Welcome ${name}!`);
  alert('Follow the instructions!');
}

function draw(){
  background(bgColor);


//Interactions with the mouse for circle A,B, and C
  fill(circleAColor);
  noStroke();
  ellipse(circleAX, circleAY, circleSize, circleSize);

  fill(circleBColor);
  ellipse(circleBX, circleBY, circleSize, circleSize);

  fill(circleCColor);
  noStroke();
  ellipse(mouseX, mouseY, circleSize, circleSize);


//Text
  fill(0);
  textSize(16);
  textFont("Roboto");
  textStyle(ITALIC);
  textAlign(CENTER);
  

  textSize(20);
  text("Click on Circle A to move or Circle B to change colors!", width / 2, height -50);

}


//When the mouse is pressed
function mousePressed(){
  let dA = dist(mouseX, mouseY, circleAX, circleAY);
  if (dA < circleSize / 2) {

    circleAX = random(width);
    circleAY = random(height);
  }

  let dB = dist(mouseX, mouseY, circleBX, circleBY);
  if (dB < circleSize / 2){

    bgColor = color(random(255), random(255), random(255));
    circleBColor = color(random(255), random(255), random(255));
  }
}


function mouseMoved(){
  if (mouseIsPressed){
    circleAX = mouseX;
    circleAY = mouseY;

  }


}

  








