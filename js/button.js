class Button {
    constructor(x, y, scale) {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.button = createSprite(x, y);
        this.button.scale = this.scale;
        this.type;
    }

    drawMore() {
        this.button.addImage(shrekImg);
        this.type = 1;
    }
    drawLess() {
        this.button.addImage(bojoImg);
        this.type = 1;
    }

    drawStart() {
        this.button.addImage(spongebobImg);
        this.type = 0;
    }

    handleMousePress() {
        this.button.onMousePressed = function() {
            if (gameState == 0) {
                gameState = 1;
                start.button.remove();
            }
        }
    }

    handleHiding() {
        if (gameState == 0 && this.type != 0) {
            this.button.shapeColor.setAlpha(0);      
        }

        if (gameState == 1 && this.type != 1) {
            this.button.shapeColor.setAlpha(0)        
        }

        if (gameState == 2 && this.type != 2) {
            this.button.shapeColor.setAlpha(0)        
        }
    }
}