export default class Player {
    constructor(x,y) {
        // noinspection JSAnnotator
        this.props = {
            x: x,
            y: y,
             pijltjes: {
                left: false,
                up: false,
                right: false,
                down: true
            },
                i:0,
            color: this.randomColor()
        };

    }


    move() {

        if	(this.props.pijltjes.left === true){
            this.props.x= this.props.x+70;
        }
        if( this.props.pijltjes.up === true) {

        }
        if(this.props.pijltjes.right===true){

        }
        if(this.props.pijltjes.down===true){

        }


        }

    draw(context) {

        context.fillStyle = this.props.color;

        context.fillRect(
            this.props.x,
            this.props.y,
            50,
            50);

    }

    randomColor() {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
}
