const prompt = require('../node_modules/prompt-promise');
let FieldFlower = require('../src/buisnes/flowers/fieldFlowers/fieldFlower');
let GardenFlower = require('../src/buisnes/flowers/gardenFlowers/gardenFlower');
let HomeFlower = require('../src/buisnes/flowers/homeFlowers/homeFlower');
let Bouquet = require('../src/bouquets/bouquet');
let FlowerStore = require('./flowerStore');

let bouquet = new Bouquet();
let store = new FlowerStore();



(async () => {
    let kindFlowers = 0;
    while (kindFlowers != 4) {

        kindFlowers = parseInt(await prompt('What kind of flowers do you need? (field - 1, garden - 2, home - 3 flowers) 4 - exit '));
        if (kindFlowers === 1) {
            console.log(store.getFieldFlowers());
            const whichFlower = parseInt(await prompt('Which flower do you want to choose? '));
            bouquet.addFieldFlower(store.getFieldFlowers()[whichFlower]);
            console.log('Your choice is: ', (store.getFieldFlowers()[whichFlower]));
        } else if (kindFlowers === 2) {
            console.log(store.getGardenFlowers());
            const whichFlower = parseInt(await prompt('Which flower do you want to choose? '));
            bouquet.addGardenFlower(store.getGardenFlowers()[whichFlower]);
            console.log('Your choice is: ', (store.getGardenFlowers()[whichFlower]));
        } else if (kindFlowers === 3) {
            console.log(store.getHomeFlowers());
            const whichFlower = parseInt(await prompt('Which flower do you want to choose? '));
            bouquet.addHomeFlower(store.getHomeFlowers()[whichFlower]);
            console.log('Your choice is: ', (store.getHomeFlowers()[whichFlower]));
        }
    }

    let packNeeded = parseInt(await prompt('Do you want to use the pack for your bouqet? (1 - yes) '));
    if (packNeeded === 1) {
        console.log(store.Packs);
        const whichPack = parseInt(await prompt('Which pack do you want to choose? '));
        bouquet.addPack(store.Packs[whichPack]);
    }


    console.log('You have to pay', bouquet.getTotalCost());


    prompt.finish();
})();