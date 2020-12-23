var  dog, happyDog,database,foodS,foodStock,button;


function preload(){

  d1 = loadImage("images/dogImg.png");
  d2 = loadImage("images/dogImg1.png");
  milk=loadImage("images/Milk.png")

}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage(d1);
  dog.scale = 0.2;
  food1=new Food();
  button=createButton('Feed the Dog')
  //foodStock = database.ref('food');
  //foodStock.on("value", readStock);
}

function draw() {  
  background("lime");
  food1.getStock();
  food1.writeStock(foodStock)
  if(keyDown("up")){
    food1.updateStock(foodStock);
  }
  console.log(foodStock)
  drawSprites();
  strokeWeight()
  stroke("red");
  text("Food Remaining:" + foodStock, 250,480);
}


//function updateStock(foodStock){
  //database.ref('/').set({
  //'food': foodStock
//})
//}

























///function readStock(data){
  //foodS=data.val();
//}

//function writeStock (x){
  //if(x<=0){
  //  x=20;
  //}else{
 //   x=x-1;
 // }

  //database.ref('/').update({
 //   food: x 
 //// })
//}