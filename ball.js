class Ball {
    constructor(x,y,radius, color) {
        this.radius = radius || 25;
        this.color = color || 'blue';
        this.x = x || -this.radius;
        this.y = y || 0;
    }

    draw(ctx) {
        ctx.save()
        ctx.fillStyle = this.color;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius,-Math.PI/2, Math.PI*3/2, false)
        ctx.fill();

        ctx.restore()
    }
}