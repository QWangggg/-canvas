class SeaGrass {
    constructor(color, num, amp) {
        this.color = color || "#3b154e";
        this.num = num || 80;
        this.amp = [];
        this.startPoint = [];
        this.endPointX = [];
        this.endPointY = [];
        this.beta = 0;
    }

    init() {
        for (var i = 0; i < this.num; i++) {
            this.startPoint[i] = Math.random()*20 + i*10;
            this.endPointX[i] = this.startPoint[i];
            this.endPointY[i] = canvas.height/1.5 - Math.random()*50;
            this.amp[i] = Math.random()*10 + 40; //幅度
        }
    }

    draw(ctx,del) {
        ctx.save();
        ctx.lineWidth = 14;
        ctx.lineCap = 'round';
        ctx.globalAlpha = 0.8;
        ctx.strokeStyle = this.color;
        
        this.beta += del*0.0012;
        var l = Math.sin(this.beta);
        
        for (var i = 0; i<this.num; i++) {
            ctx.beginPath();
            ctx.moveTo(this.startPoint[i], canvas.height);
            
            this.endPointX[i] = this.startPoint[i] + l*this.amp[i]
            ctx.quadraticCurveTo(this.startPoint[i], canvas.height-120, this.endPointX[i], this.endPointY[i])
            ctx.stroke();
        }

        ctx.restore();
    }

    /*
        quadraticCurveTo 绘制一条二次贝塞尔曲线
        二次贝塞尔曲线需要两个点。第一个点是用于二次贝塞尔计算中的控制点，第二个点是曲线的结束点。曲线的开始点是当前路径中最后一个点。
        context.quadraticCurveTo(cpx,cpy,x,y);
        cpx	贝塞尔控制点的 x 坐标
        cpy	贝塞尔控制点的 y 坐标
        x	结束点的 x 坐标
        y	结束点的 y 坐标

        开始点：moveTo(20,20)
        控制点、结束点：quadraticCurveTo(20,100,200,20)
    */
}