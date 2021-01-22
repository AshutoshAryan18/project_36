var dog,sadDog,happyDog;
var button1
var button2
var database
var foodS
var foodStock
var feed,addFood
var foodObj


function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
 
}

function setup() {
  createCanvas(1000,500);
  database=firebase.database();
  
  foodObj=new Food()

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("feed the dog")
  feed.position(700,95)
  feed.mousePressed(feeddog)


  addFood=createButton("add food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)


}

function draw() {
  background(46,139,87);
  fill (225,225,254)
  textSize(15)
  if(lastfed>=12){
    text("last feed : "+lastfed%12 +"PM",350,30)
  }else if(lastfed==0){
    text("last feed : 12 AM",350,30)
  }else{
    text("last feed :"+ lastfed + "AM",350,30)
  }

  fedTime=database.ref("feedtime")
  fedTime.on("value",(data)=>{
  lasfed=data.val();
})

  foodObj.display();
  drawSprites();
}

//function to read food Stock
  function readStock(data){
    foodS = data.val();
    foodObj.updateFoodStock(foodS)
  }


//function to update food stock and last fed time
  function feeddog(){
  dog.addImage(happyDog)

  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref("/").update({
    food:foodObj.getFoodStock(),
    feedtime:hour()
  })
}


//function to add food in stock
function addFoods(){
  foodS++
  database.ref("/").update({
    food:foodS
  })
}
