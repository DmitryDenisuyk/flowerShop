
const FieldFlower = require('../src/buisnes/flowers/fieldFlowers/fieldFlower');
const HomeFlower = require('../src/buisnes/flowers/homeFlowers/homeFlower');
const GardenFlower = require('../src/buisnes/flowers/gardenFlowers/gardenFlower');
const Pack = require('../src/bouquets/pack');

class FlowerStore {

    constructor() {
        this.GardenFlowers =  [
            new GardenFlower('red', 60, 6, 15),
            new GardenFlower('white', 60, 5, 12),
            new GardenFlower('yellow', 50, 3, 11),
            new GardenFlower('blue', 50, 2, 10),
            new GardenFlower('pink', 70, 10, 17),
        ]; 
        this.FieldFlowers = [
            new FieldFlower('red', 60, 'rare', 20),
            new FieldFlower('green', 70, 'uncommon', 10),
            new FieldFlower('yellow', 60, 'common', 15),
            new FieldFlower('white', 50, 'uncommon', 19),
        ];
        this.HomeFlowers = [
            new HomeFlower('brown', 50, false, 12),
            new HomeFlower('red', 70, true, 11),
            new HomeFlower('blue', 50, true, 7),
            new HomeFlower('orange', 60, true, 9),
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
