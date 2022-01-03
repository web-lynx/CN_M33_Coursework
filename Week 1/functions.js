// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }

// pressGrindBeans();

// let coffeeIsGrinding = true;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//     console.log("Grinding is about to begin");
//     coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`)
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(20, 50447921);

//! can also use global variables, eg:

// let accnumber = 50449921; //global variable here

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`)
// }

// cashWithdrawal(300, accnumber); //called here
// cashWithdrawal(30, 50449921);
// cashWithdrawal(20, 50447921);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp(2,5));

//TODO Activity 1:

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

//TODO Activity 2:

// let orderCount = 0;

// const takeOrder = (topping,size) => {
//     console.log(`A ${size} Pizza with ${topping}. Order number ${(orderCount + 1)}`);
//     orderCount ++;
// }

// takeOrder("pineapple","small");

//TODO Activity 3:

// let funds = 1000;
// let pin = 1234;

// const bankTeller = (inputPin, inputFunds) => {
//     if (inputPin = pin) {
//     console.log("Your pin is correct."); {
//         if (inputFunds <= funds) {
//             funds = (funds - inputFunds);
//             console.log(`Withdrawing £${inputFunds}. £${funds} left in account.`);
//         } else {
//             console.log("Sorry, you can't withdraw that much.");
//         }
//     }
//     } else {
//         console.log("Sorry, your PIN is incorrect.");
//     }
// }

// bankTeller(1234,100);

//todo Object Literals

let profile = { // this is a profile object containing three key value pairs 
    name: 'Alexander R. Wayland',
    age: 33,
    location: 'Liverpool'
}

console.log(profile);

console.log(profile.location);