// //todo Object Literals

// let profile = { // this is a profile object containing three key value pairs 
//     name: 'Alexander R. Wayland',
//     age: 33,
//     location: 'Liverpool'
// }

// console.log(profile);

// console.log(profile.location);

// //? From Lecture Slides

// //! Cafe Task

// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappucino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced Sandwich",
//     noOffer: "Sorry no offer",
//     openCafe:()=>{
//         if(this.hasSpecialOffers = true){ //this is specifying the current object
//             return "Time for a special offer!";
//         }
//     },
//     closeCafe: ()=>{
//         return "We are closed, please come back tomorrow!"
//     }
// };

// console.log(cafe.openCafe());

// if (time < 1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }
// cafe.drinks = ["Flat White"];
// console.log(cafe.drinks);




// const person = {
//     name: "Alexander",
//     age: 33,
//     tunes: ["Ink Long Dry - Masayoshi Soken", " Plug-in Baby - Muse"," Harvest - Nightwish"]
// };

// if (person.name = "Alexander") {
//  console.log(`${person.tunes}`)}

// //OR - with square bracket notation:

// console.log(person["name"]);

// //todo Desk Task

// var readline = require("readline-sync");
// let day = readline.question("Enter the day for the alarm: ").toLowerCase();

// const alarms = {
//     weekendAlarm: ("No alarm needed"),
//     weekdayAlarm: ("Get up at 0700"),
//     weekends: ["saturday","sunday"]
// };

// alarms.weekends.includes(day) ? console.log(alarms.weekendAlarm) : console.log(alarms.weekdayAlarm);

//todo Activity 1

// const person = {
//     name: "Alexander",
//     age: 33,
//     tunes: ["Ink Long Dry - Masayoshi Soken", " Plug-in Baby - Muse"," Harvest - Nightwish"],
//     sayHi: () => {return(`"Hello, my name is ${person.name}"`);}
// };

// console.log(person.sayHi())

//todo Activity 2

// const pet = {
//     name: "Meowhammad Ali",
//     typeOfPet: "Cat",
//     age: 3,
//     colour: "Tabby",
//     eat: ()=>{return `${this.name} is eating.`;},
//     drink: ()=>{return `${this.name} is drinking.`;}
// };

// console.log(pet.eat());

//todo Activity 3

const coffeeShop = {
    branch: 'Bold Street',
    drinks: {
        espresso: 1,
        doble: 1.10,
        latte: 1.30,
        cappuccino: 1.50
    }, 
    food: {
        toastie: 1.10,
        croissant: 0.99,
        soup: 1.50,
        sandwich: 2.10
    },
    drinksOrdered(...drinks) {
        let cost = 0;
        const drinksStr = drinks.join(' & ');
        drinks.forEach(drink => (cost += this.drinks[drink]));
        cost = cost.toString().split('.');
        cost[1] = cost[1].padEnd(2, '0');
        cost = cost.join('.');
    
        return this.displayOrder(drinksStr, cost);
      },
    foodOrdered(...food) {
        let cost = 0;
        const foodStr = food.join (' & ');
        food.forEach(food => (cost += this.food[food]));
        cost = cost.toString().split('.');
        cost[1] = cost[1].padEnd(2, '0');
        cost = cost.join ('.');
        return this.displayOrder(foodStr,cost);
    },
    displayOrder(order,cost) {
        return console.log(`Thank you for your order. You bought: ${order} for a total of £${cost}.`)
    }

}

coffeeShop.drinksOrdered('cappuccino', 'espresso','latte');
coffeeShop.foodOrdered('croissant', 'toastie','soup');