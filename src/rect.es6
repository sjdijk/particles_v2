export default class Rect {
    constructor(x,y ){
        this.props = {
            x: x,
            y: y,
            vel: {
                x: Math.random() * 2 - 4,
                y: Math.random() * 2 - 2
            },
            gravity: -0.1,
            color: this.randomColor()
        };
    }

    move() {
        this.props.vel.y += this.props.gravity;

        this.props.x += this.props.vel.x;
        this.props.y += this.props.vel.y;
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = this.props.color;

    }

    randomColor() {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
}