// 画一个箭头
class Arrow {
    constructor(x,y,rotation,color) {
        this.x = x || 0;
        this.y = y || 0;
        this.rotation = rotation || 0;
        this.color = color || '#ffff00';
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.x, this.y); //将坐标移动到this.x和this.y
        ctx.rotate(this.rotation); //设置旋转角度
        ctx.lineWidth = 5; //设置线宽
        ctx.fillStyle = this.color; //设置填充色
        ctx.beginPath(); //路径开始
        ctx.moveTo(-50, -25);
        ctx.lineTo(0, -25);
        ctx.lineTo(0, -50);
        ctx.lineTo(50, 0);
        ctx.lineTo(0, 50);
        ctx.lineTo(0, 25);
        ctx.lineTo(-50, 25);
        ctx.closePath(); //路径闭合
        ctx.stroke(); //描边
        ctx.fill(); //填充
        ctx.restore();
    }
}