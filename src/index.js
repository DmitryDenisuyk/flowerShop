const prompt = require('../node_modules/prompt-promise');
// const readline = require('../node_modules/readline-sync');
let FieldFlower = require('../src/buisnes/flowers/fieldFlowers/fieldFlower');
let GardenFlower = require('../src/buisnes/flowers/gardenFlowers/gardenFlower');
let HomeFlower = require('../src/buisnes/flowers/homeFlowers/homeFlower');
let Bouquet = require('../src/bouquets/bouquet');
let FlowerStore = require('./flowerStore');

let bouquet = new Bouquet();
let store = new FlowerStore();



(async () => {
    let kindFlowers = 0;
    while(kindFlowers != 4){

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

let packNeeded = parseInt(await prompt('Do you wan to use the pack for your bouqet? '));
if (packNeeded === 1) {
    console.log(store.Packs);
    const whichPack = parseInt(await prompt('Which pack do you want to choose? '));
    bouquet.addPack(store.Packs[whichPack]);

}


 

    //const numberFlower = parseInt(await prompt('How many flowers do you want to buy? '));

    console.log('You have to pay', bouquet.getTotalCost());




    // const color = await prompt('enter color: ');
    // // let idxColor = await fieldFlower.indexOf(color);
    // const length = parseInt(await prompt('enter length: '));
    // // let idxLength = await fieldFlower.indexOf(length);
    // // let rarity, time, sunNeeded;

    // if (kindFlowers === 1) {
    //     rarity = await prompt('Enter rarity: ');

    //     // let arrFieldFlower = [color, length, rarity]; 
    //     console.log(arrFieldFlower);
    // } 
    // else if (kindFlowers === 2) {
    //     time = await prompt('Enter TTL of flower: ');

    //     // let arrGardenFlower = [color, length, time]; 
    // } 
    // else if (kindFlowers === 3) {
    //     // sunNeeded = await prompt('enter need sun: ');

    //     // let arrHomeFlower = [color, length, sunNeeded]; 
    // } 



    // while (idx != -1) {
    //   indices.push(idx);
    //   idx = array.indexOf(element, idx + 1);
    // }


    prompt.finish();
})();