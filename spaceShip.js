class SpaceShip {
    constructor(x, y, rotation, shipColor, fireColor){
        this.x = x || 0;
        this.y = y || 0;
        this.rotation = rotation || 0;
        this.shipColor = shipColor || 'white';
        this.fireColor = fireColor || 'pink';
    }

    init(ctx) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.shipColor;
        ctx.beginPath();
        ctx.moveTo(this.x+10,this.y);
        ctx.lineTo(this.x-15,this.y+10);
        ctx.lineTo(this.x-5,this.y);
        ctx.lineTo(this.x-15,this.y-10);
        ctx.lineTo(this.x+10,this.y);
        ctx.stroke();
    }

    fireInit(ctx) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.fireColor;
        ctx.beginPath();
        ctx.moveTo(this.x-7,this.y+2);
        ctx.lineTo(this.x-9, this.y);
        ctx.lineTo(this.x-7,this.y-2);
        ctx.stroke();
    }

    draw(ctx,showFire) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        init(ctx);
        if (showFire) {
            fireInit(ctx);
        }
        ctx.restore();
    }
}