window.onload = function snakeGame() {
    var stage = document.getElementById('stage');
    var ctx = stage.getContext('2d');
    document.addEventListener('keydown', keyPush);

    setInterval(game, 80);

    const vel = 1;
    var vx = (vy = 0);
    var px = 10;
    var py = 15;
    var tp = 20;
    var qp = 20;
    var fx = (fy = 15);
    var trail = [];
    tail = 5;

    function game() {
        px += vx;
        py += vy;

        if (px < 0) {
            px = qp - 1;
        }
        if (px > qp - 1) {
            px = 0;
        }
        if (py < 0) {
            py = qp - 1;
        }
        if (py > qp - 1) {
            py = 0;
        }

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, stage.width, stage.height);

        ctx.fillStyle = 'red';
        ctx.fillRect(fx * tp, fy * tp, tp, tp);

        ctx.fillStyle = 'green';

        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp, tp);
            if (trail[i].x == px && trail[i].y == py) {
                vx = vy = 0;
                tail = 5;
            }
        }

        trail.push({ x: px, y: py });

        while (trail.length > tail) {
            trail.shift();
        }

        if (fx == px && fy == py) {
            tail++;
            fx = Math.floor(Math.random() * qp);
            fy = Math.floor(Math.random() * qp);
        }
    }

    function keyPush(e) {
        switch (e.keyCode) {
            case 37: //esquerda
                vx = -vel;
                vy = 0;
                break;
            case 38: //cima
                vx = 0;
                vy = -vel;
                break;
            case 39: //direita
                vx = vel;
                vy = 0;
                break;
            case 40: //baixo
                vx = 0;
                vy = vel;
                break;
            default:
                break;
        }
    }

    function start(){
        
    }
};