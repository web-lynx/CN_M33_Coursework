// if (1 != "1"){
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// let place =- "Mancunia";
// let weather = "Cloudy";

// if (place == "Mancunia" && weather == "Sunny") {
//     console.log('Check again');
//     }    
// else if (place == "Mancunia" && weather == "Rain") {
//         console.log("Obvs");
//      }
// else {
//         console.log("What, it isn't raining?");
//     }

// let day = "Saturday";
// if (day == "Saturday" || day == "Sunday"){console.log("It's weekend!");
// }
// else { console.log("When's weekend?");
// }

// const grade = 87;

// switch(true) {
//     case grade >= 70:
//         console.log("Distinction");
//         break;
//     case grade >= 60:
//         console.log("Merit");
//         break;
//     case grade >= 50:
//         console.log("Pass");
//         break;
//     default:
//         console.log("Failed");
// }

// //? Activity 1

// let age = 33;
// let country = "UK";

// if (age >= 18 && country == "UK") {
//     console.log("Yes, I can serve you here in the UK.");
// }
// else if (age < 18 && country == "UK") {
//     console.log("Sorry, I can't serve you because you're underage in the UK.")
// }
// else {
//     console.log("Sorry, I can't serve you because you're from another country.");
// }

// //? Activity 2

// let pizzaTopping = "burrata";

// switch(true) {
//     case pizzaTopping == "pepperoni":
//         console.log("These are important ingredients for my pizza.")
//         break;
//     case pizzaTopping == "burrata":
//     case pizzaTopping == "mozzarella":
//         console.log(`"I don't mind having ${pizzaTopping} on my pizza."`)
//         break;
//     default:
//         console.log(`"${pizzaTopping} should not be on a pizza."`);
// }

// //? Activity 3

// let password = "swordfish"

// if (password.length >= 8) {
//     console.log(`"Your password is ${password}"`);
// }
// else {
//     console.log("Your password is too short.");
// }

// //? Activity 4

// let num = 24385;

// if (num % 3 || num % 5) {
//     console.log("This number is divisible between 3 or 5");
// }
// else {
//     console.log("This number is not divisible between 3 or 5.");
// }

// //? Activity 5

// num = 15;

// if (num / 3 && num / 5) {
//     console.log("fizz buzz");
// }
// else if (num / 3) {
//     console.log("fizz");
// }
// else if (num / 5) {
//     console.log("buzz");
// }
// else {
//     console.log(`${num}`)
// }

// //? Activity 6 

// var num = "20201";

// function reverse(num) {
//     return num.split('').reverse().join('');
// } 

// if (reverse(num) == num) {
//     console.log ("Palindrome!");
// }
// else {
//     console.log ("Not a palindrome!");
// }
 
// //? Activity 7

// let time = 18;
// let placeOfWork = "town centre";
// let townOfHome = "Liverpool";

// if (time < 9 && time > 8 ) {
//     console.log(`"I'm commuting to work in ${placeOfWork}"`);
// }
// else if (time >= 9 && time < 18) {
//     console.log(`I'm at work in ${placeOfWork}`);
// }

// else {
//     console.log(`"I'm probably at home in ${townOfHome}."`);
// }

//? Activity 8 this feels like a weird solution

// let testString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let stringArray = testString.split();
// let vowels = ["a","e","i","o","u"];

// console.log(`The rightmost vowel is at position ${testString.lastIndexOf(vowels)}.`);

// //? Activity 9

// let word = "amoeba";

// if (word[0] == word[word.length-1]) {
//     console.log("True!");
// }
// else {
//     console.log("False!");
// }

// //? Activity 10
// //! Remember your == next time!

// let num1 = 1;
// let num2 = 2;

// if (num1 +num2 % 2 == 0) {
//     console.log(num1 + num2);
// }
// else {
//     console.log(num1 * num2);
// }