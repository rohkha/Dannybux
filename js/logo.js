class logo{
    constructor(img, x, y, scale) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.logo = createSprite(this.x, this.y);
        
    }
    
    draw() {
        this.logo.addImage(this.img);
        this.logo.scale = this.scale;
    }

    delete() {
        this.logo.remove();
    }
}