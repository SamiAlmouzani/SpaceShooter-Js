function Enemy(x, y){
    this.x = x;
    this.y = y;

    this.show() = function(){
        fill('black');
        square(this.x, this.y, 50);
        fill('blue');
        rect(this.x / 3, this.y, 10 ,20);
    }
}