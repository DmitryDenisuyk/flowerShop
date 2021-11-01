const Flower = require('../flower');

class FieldFlower extends Flower {
    constructor(color, length, rarity, cost) {
        super(color, length, cost);
        this.rarity = rarity;
    }
    getRarity() {
        return this.rarity;
    }
}

module.exports = FieldFlower;
