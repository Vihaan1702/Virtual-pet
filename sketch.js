var dog,dogHappy;
var database;
var foodS,FoodStack;


function preload()
{
  dog.loadImage("dogImg.png/images");
  dog.loadImage("dogImg1.png/images");

}

function setup() {

  dog = createSprite(200,200,20,80);
  dog.addImage(dogImg);

  database = firebase.database();
  console.log(database);
  createCanvas(800, 700);
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);

  }

  drawSprites();
  

}

function readStock(data){
foodS = data.val();

}

function writeStock(x){

  database.ref().update({
    food : x
  })
}



