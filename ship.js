
function Ship(){
    this.x = width/4;
    this.xdir = 0;
    this.y = height/2 + 20;

    this.show = function() {
        image(shipImg, this.x, this.y);
        shipImg.resize(200, 250);
    }
    this.setDir = function(dir){
        this.xdir = dir;
    }
    this.move = function(dir){
        this.x += this.xdir * 5;
    }
}