const Flower = require('../flower');

class GardenFlower extends Flower {
    constructor(color, length, sunNeeded, cost) {
        super(color, length, cost);
        this.sunNeeded = sunNeeded;
    }
    getSunNeeded(){
        return this.sunNeeded;
    }
}

module.exports = GardenFlower;