class SpaceShip {
    constructor(x, y, rotation, shipColor, fireColor){
        this.x = x || 0;
        this.y = y || 0;
        this.rotation = rotation || 0;
        this.shipColor = shipColor || 'white';
        this.fireColor = fireColor || 'pink';
    }

    init(ctx) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.shipColor;
        ctx.beginPath();
        ctx.moveTo(10,0);
        ctx.lineTo(-15,10);
        ctx.lineTo(-5,0);
        ctx.lineTo(-15,-10);
        ctx.lineTo(+10,0);
        ctx.stroke();
    }

    fireInit(ctx) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.fireColor;
        ctx.beginPath();
        ctx.moveTo(-7,+2);
        ctx.lineTo(-9, 0);
        ctx.lineTo(-7,-2);
        ctx.stroke();
    }

    draw(ctx,showFire) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        this.init(ctx);
        if (showFire) {
            this.fireInit(ctx);
        }
        ctx.restore();
    }
}