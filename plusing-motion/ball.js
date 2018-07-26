class Ball {
    constructor(x, y, radius, color) {
        this.x = x || 100;
        this.y = y || 100;
        this.radius = radius || 20;
        this.color = color || 'lightblue';
        this.scaleX = 0;
        this.scaleY = 0;
    }

    // draw(ctx) {
    //     ctx.save();
    //     ctx.beginPath();
    //     ctx.fillStyle = this.color;
    //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    //     ctx.fill();
    //     ctx.restore();
    // }
    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;

        var r = this.radius + this.scaleX;

        ctx.arc(this.x, this.y, r, 0, Math.PI*2)
        ctx.fill();
        ctx.restore();
    }
}