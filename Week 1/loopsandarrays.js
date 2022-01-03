// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];

// coffeeOrder[1] = "Ann - Vanilla latte";

// coffeeOrder.push("Donna - espresso");
// coffeeOrder.pop(); // Pop lets us remove items from an array

// console.log(coffeeOrder);

//By adding the square brackets, we can find the item in the array at position 2 (3 from a human perspective) console.log(coffeeOrder[2])

//We can add the .length property to get the length of our array console.log(coffeeOrder.length);

// //? Activity 1

// let tunes = [
//     'Oingo Boingo - Private Life',
//     'Masayoshi Soken - Ink Long Dry',
//     'Muse - Plug In Baby'
// ];

// tunes.push('Placebo - Pure Morning','Rick Astley - Never Gonna Give You Up');
// tunes.pop();

// console.log(tunes)

// //? Activity 2

// let goodVegetables = [
//     'celery',
//     'iceberg lettuce',
//     'onion'
// ];

// let first = goodVegetables.shift(); //Removes first position item (celery)

// let goodFruits = [
//     'tomato',
//     'apple',
//     'honeydew melon'
// ];

// let removeditem = goodFruits.splice(2); //Removed second position item (honeydew melon)

// let goodProduce = goodVegetables.concat(goodFruits); //Concatenates first and second array

// console.log(goodProduce);

//! back to lecture

// let favouriteDrinks = ["Coke", "Fanta", "Tonic"];

// // console.log(favouriteDrinks[0]);
// // console.log(favouriteDrinks[1]);
// // console.log(favouriteDrinks[2]);

// for(let i = 0; i <favouriteDrinks.length; i ++){
//     console.log(favouriteDrinks[i]);
// }

// let multiplesTwo = [];

// for(let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         multiplesTwo.push(i);
//     }
// }
// console.log(`'Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`)

// let age = 15;

// while(age < 18){
//     console.log("You're a child!");
//     age++;
// }
// console.log("You're an adult!");

// let cards = ["Diamond","Spade","Heart","Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }

// console.log(currentCard);

// //? Activity 1:

// let favouriteFilms = [
//     "Dark City",
//     "Leon",
//     "Drive",
// ];

// favouriteFilms.push("Dune","Ghostbusters");

// for(let i = 0; i < favouriteFilms.length; i ++){
//     console.log(favouriteFilms[i]);
// }

//? Activity 2:

// for (let i = 0; i < 5; i ++) {
//     console.log(Math.floor(Math.random() * 50) + 1);
// }

//? Activity 3:

// let oneToNine = [1,2,3,4,5,6,7,8,9]

// for (let i = oneToNine.length -1; i >= 0; i --) {
//     console.log(oneToNine[i])
// }

//? Activity 4:

// let favouriteFilms = ["Dark City","Leon","Drive","Dune"];

// for (let i = 0; i < 4; i ++) {
//     if (favouriteFilms[i] == "Ghostbusters") {
//         console.log("Yay, it's Ghostbusters!")
//     }
//     else
//         console.log(`"It's ${favouriteFilms[i]}? Boo, we want Ghostbusters!"`)
// }

//? Activity 5:

// let sevens = []

// for (let i = 0; i < 6; i ++) {
//     sevens.push(Math.floor(Math.random() * 30) + 1);
//         if (sevens[i] % 7 == 0) {
//             console.log(`The number ${sevens[i]} is divisible by 7.`)}
//         else console.log(`The number ${sevens[i]} is not divisible by 7.`)
//         }

// //? Activity 6:

// let bobsFollowers = ["Jim","Joe","Jeremy","Jane"];
// let hannahsFollowers = ["Jane","Jezebel","Jordan","Jeremy"];

// for (let i = 0; i < bobsFollowers.length; i++) {
//     if (hannahsFollowers.includes(bobsFollowers[i]))
//     console.log(`${bobsFollowers[i]} is a mutual friend.`)
// }

//? Activity 7:

//a "do...while" loop will always run at least once, as the test condition is specified AFTER the loop

let i = 0;

for (let i = 0; i < 5; i ++) {
    console.log("I am a for loop")
}

while (i < 5) {
    i ++
    console.log("I am a while loop")
}

i = 0;

do {
    i ++;
    console.log("I am a do...while loop")
} while(i < 5);