
function preload() {
//loads the image
cat_Animation = loadAnimation("images/cat1.png");
cat_Animation2 = loadAnimation("images/cat2.png","images/cat3.png");
cat_Animation4 = loadAnimation("images/cat4.png");
mouse_Animation = loadAnimation("images/mouse1.png");
mouse_Animation2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouse_Animation4 = loadAnimation("images/mouse4.png");
garden_Image = loadImage("images/garden.png");


}

function setup(){
    createCanvas(650,750);

    //creates the background and adds image to it
    background_Image = createSprite(200,350,20,20);
    background_Image.addImage(garden_Image);

    //creates the cat sprite and adds image to it
    tom = createSprite(580,640,20,20);
    tom.addAnimation("cat",cat_Animation);
    tom.scale = 0.1;

    //creates the mouse sprite and adds image to it
    jerry = createSprite(180,640,20,20);
    jerry.addAnimation("mouse", mouse_Animation);
    jerry.scale = 0.1;
}

function draw() {

    background(0);
    
    //detects the collision between the cat and mouse
    if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
        tom.addAnimation("cat",cat_Animation4);
        jerry.addAnimation("mouse", mouse_Animation4)
        tom.velocityX = 0;
        tom.x = tom.x + 70;
        //console.log(tom.x);
    }

    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here

     if(keyCode === LEFT_ARROW){
        jerry.addAnimation("mouse",mouse_Animation2);
        jerry.frameDelay = 5;

        tom.addAnimation("cat",cat_Animation2);
        tom.velocityX = -4;
    }
  }