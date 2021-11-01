
const FieldFlower = require('../src/buisnes/flowers/fieldFlowers/fieldFlower');
const HomeFlower = require('../src/buisnes/flowers/homeFlowers/homeFlower');
const GardenFlower = require('../src/buisnes/flowers/gardenFlowers/gardenFlower');
const Pack = require('../src/bouquets/pack');

class FlowerStore {

    constructor() {
        this.GardenFlowers =  [
            new GardenFlower('red', 60, 6, 10),
            new GardenFlower('white', 60, 5, 10),
            new GardenFlower('yellow', 50, 3, 10),
            new GardenFlower('blue', 50, 2, 10),
            new GardenFlower('pink', 70, 10, 10),
        ]; 
        this.FieldFlowers = [
            new FieldFlower('red', 60, 'rare', 10),
            new FieldFlower('green', 70, 'uncommon', 10),
            new FieldFlower('yellow', 60, 'common', 10),
            new FieldFlower('white', 50, 'uncommon', 10),
        ];
        this.HomeFlowers = [
            new HomeFlower('brown', 50, false, 10),
            new HomeFlower('red', 70, true, 10),
            new HomeFlower('blue', 50, true, 10),
            new HomeFlower('orange', 60, true, 10),
        ];
        this.Packs = [
            new Pack('paper', 5),
            new Pack('cellophane', 4),     
        ];
    }

    getFieldFlowers(){
        return this.FieldFlowers;    
    }

    getGardenFlowers(){
        return this.GardenFlowers;   
    }

    getHomeFlowers(){
        return this.HomeFlowers;    
    }
}
module.exports = FlowerStore;
