class cards {
    constructor(img, x, y, scale) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.card = createSprite(this.x, this.y);

    }

    draw() {
        this.card.addImage(this.img);
        this.card.scale = this.scale;
    }

    handleMousePress() {
        this.button.onMousePressed = function() {
            if (gameState == 1) {
                return true;
            }
        }
    }

    delete() {
        this.card.remove();
    }
}