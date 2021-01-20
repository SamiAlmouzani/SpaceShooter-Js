
function Ammo(x,y){
    this.x = x;
    this.y = y;

    this.show = function(){
        fill('red');
        circle(this.x, this.y, 12);
    }

    this.move = function(){
        this.y -= 1 * 3;
    }
}