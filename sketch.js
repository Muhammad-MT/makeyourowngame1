var carImage1, carImage2, carImage3, carImage4,canvas;
var trackImage;
var car1, car2, car3, car4;
var  database, form, player;

function preload(){
carImage1= loadImage("assets/car-image-1.png");
carImage2= loadImage("assets/car-image2.png");
carImage3= loadImage("assets/car-image3.png");
carImage4= loadImage("assets/car-image4.png");
trackImage= loadImage("assets/track.png");

}



function setup(){
canvas = createCanvas(windowWidth,windowHeight)
database = firebase.database()
game = new Game()
game.start();

}



function draw(){

background(trackImage)


}