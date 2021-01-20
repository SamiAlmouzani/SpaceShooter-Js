let shipImg;
let ship;
let height = 400;
let width = 400;
let ammo = [];
let enemy = [];
let button;
let buttonValue = false;


function preload(){
    shipImg = loadImage('actualShip.png', function(){console.log("it works")});
}
function setup(){
    createCanvas(width,height);
    ship = new Ship();    
}
function draw(){
    
    //background(225);
    //button = createButton('Start');
    //button.position(175,175);
    
    //if(buttonValue === true){
    background(0); 
    ship.show();
    ship.move();
    //}
    for(let i = 0; i < ammo.length; i++){
        ammo[i].show();
        ammo[i].move();
    }
}

function keyReleased(){
    if(key != ' ')
        ship.setDir(0);
}
function keyPressed(){
    if(keyCode === 32){
        let ammoBullet = new Ammo(ship.x + 87, height - 90);
        ammo.push(ammoBullet);
    }
    if(keyIsDown(68) || keyIsDown(39)){
        ship.setDir(1);
    }
    else if (keyIsDown(65) || keyIsDown(37)){
        ship.setDir(-1);
    }
}