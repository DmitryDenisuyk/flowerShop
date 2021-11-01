

class Flower {
    constructor(color, length, cost) {
        this.color = color;
        this.length = length;
        this.cost = cost; 
    }
    
    toString() {
        console.log(`The flower with ${color} color and ${length} length` );
    }
}

module.exports = Flower;