class Bouquet {
    constructor() {
        this.GardenFlowerPool = [];
        this.FieldFlowerPool = [];
        this.HomeFlowerPool = [];
        this.Pack = [];
    }

    addFieldFlower(fieldFlower) {
        this.FieldFlowerPool = [...this.FieldFlowerPool, fieldFlower];
    }

    addGardenFlower(gardenFlower) {
        this.GardenFlowerPool = [...this.GardenFlowerPool, gardenFlower];
    }

    addHomeFlower(homeFlower) {
        this.HomeFlowerPool = [...this.HomeFlowerPool, homeFlower];
    }

    addPack(pack) {
        this.Pack = [...this.Pack, pack];
    }
    

    getTotalCost(){
        let cost = 0;
        for(let i = 0; i < this.GardenFlowerPool.length; i++ ){
            cost = cost + this.GardenFlowerPool[i].cost; 
        }
        for(let i = 0; i < this.FieldFlowerPool.length; i++ ){
            cost = cost + this.FieldFlowerPool[i].cost; 
        }
        for(let i = 0; i < this.HomeFlowerPool.length; i++ ){
            cost = cost + this.HomeFlowerPool[i].cost; 
        }
        for(let i = 0; i < this.Pack.length; i++ ){
            cost = cost + this.Pack[i].cost; 
        }
        return cost;
    }
}

module.exports = Bouquet;

