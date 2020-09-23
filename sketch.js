var bullet, wall, thickness;
var speed, weight, bullet_Fired;

// preloads the bullet shooting sound effect to be used fastly later in the code
function preload()
{
  bullet_Fired = loadSound("bullet_Fired.mp3");
}

function setup() {
// creating a canvas of 1600 x 400
  createCanvas(1600,400);

// plays the bullet shooting sound effect  
  bullet_Fired.play();

// generates random thickness between 22 and 83
  thickness = random(22,83);

// generates random speed between 223 and 321  
  speed = random(223,321);

// generates random weight between 30 and 52  
  weight = random(30,52);

// creating bullet sprite and giving it golden color
  bullet = createSprite(50, 200, 150, 50);
  bullet.shapeColor = color(255,223,0);
  bullet.velocityX = speed;
  
// creating a wall sprite then giving it white colour 
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);  
}

function draw() {
// sets the background to white  
  background(255,255,255);  

// changes the size of the text to 40
  textSize(40);

// checks the collision b/w the bullet and the wall and reduces the velocity of the bullet to 0  
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
  
  // creating a variable damage
    var damage = Math.round(0.5 * weight * speed * speed/(thickness * thickness * thickness));
    console.log(damage);
  
  // if the damage of the bullet is more than 10 the following things will occur
  if(damage>10)
  {
  // changes the color of the wall to red and displays some text on the screen
      fill("red");
      wall.shapeColor = color(255,0,0);
      text("! The Bullet Is Powerful !",400,250);
      text("Bullet's Damage Causing Power is "+damage,300,200);
  }

  // if the damage of the bullet is equal to 10 the following things will occur
  if(damage>9 && damage===10 && damage<11)
  {
  // changes the color of the wall to purple and displays few lines of important information on the screen
      fill("purple");
      wall.shapeColor = color(255,0,0);
      text("! The Bullet Power Is Neutral !",400,250);
      text("Bullet's Damage Causing Power is "+damage,335,200);  
  }
  
  // if the damage of the bullet is less than 10 the following things will occur
  if(damage<10)
  {

  // changes the colour of the wall to green and displays some on-screen information  
    fill("green");
    text("! The Bullet Is Weak !",400,250);
    text("Bullet's Damage Causing Power is "+damage,300,200);
    wall.shapeColor = color(0,255,0);
  }
  
  // makes all the edges as a sprite objects
  createEdgeSprites();
  
  // displays all the sprites on the screen
  drawSprites();
}

// creating a function has Collied to be checked b/w the bullet and the wall
function hasCollided(bullet, wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
      return true
  }
      return false
}
}