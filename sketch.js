//Create variables here
var food, stilldog,happydog
function preload()
{
	//load images here
  stilldog = loadImage("images/dogImg.png")
  happydog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database= firebase.database()
  database.ref('food').on("value",readPosition)

  dog = createSprite(400,400,50,50)
  dog.addImage(stilldog)
  dog.scale = 0.4
  
}


function draw() {  
  background("pink")
  drawSprites();
  //add styles here
  textSize(20)
  text ("foods remaining: " + food, 300,200)
  text ("press up arrow, to feed the dog", 100,50)

  if(food===0){
    dog = createSprite(400,400,50,50)
    dog.addImage(happydog)
    dog.scale = 0.4
    
     
  }
  if(keyWentDown(UP_ARROW) && food!==0){
    food--
    writeStock(food)
  }

}

function readPosition(data){
  food = data.val()
}
function writeStock(data){
  database.ref('/').set({
    food:data
  })
}

