const Flower = require('../flower');

class GardenFlower extends Flower {
    constructor(color, length, time, cost) {
        super(color, length, cost);
        this.time = time;
    }
    getTime(){
        return this.time;
    }
}

module.exports = GardenFlower;
