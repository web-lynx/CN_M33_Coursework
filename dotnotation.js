// const i = ["HELLO WORLD".toLowerCase()]
// console.log(i);

// i is for index, commonly used

// console.log(Math.floor(Math.random()*10));

// Option 1: Quick n' Dirty
// const gridvertical = ["   |   |   "];
// const gridhorizon = ["-----------"];

// console.log(gridvertical);
// console.log(gridvertical);
// console.log(gridvertical);
// console.log(gridhorizon);
// console.log(gridvertical);
// console.log(gridvertical);
// console.log(gridvertical);
// console.log(gridhorizon);
// console.log(gridvertical);
// console.log(gridvertical);
// console.log(gridvertical);

// Option 2: Prettier

// let i = `

//    |   |   
//    |   |   
//    |   |   
// -----------   
//    |   |   
//    |   |   
//    |   |   
// -----------
//    |   |   
//    |   |   
//    |   |`;

// console.log(i);

//Option 3: Loop

// for (let j = 0; j < 11; j++) {
//     if (j % 4 == 3) {
//         console.log("-----------");
//     } else {
//         console.log("   |   |   ")
//     }
// }

//Extra Activity 1 - 

let personalinfo = ["Alex Wayland","33","Scorpio"];
console.log(personalinfo[0]);
console.log(personalinfo[1]);
console.log(personalinfo[2]);

// Extra Activity 2 - String method
//Here we are using the .includes method in order to find if a string contains a substring. This might be useful for finding out if users are on a certain type of OS, regardless of their version - Windows 11, 98, etc.

const OS = 'Windows 10';

if (OS.includes('Windows')) {
    console.log('Windows OS detected');
} else {
    console.log('Not a windows OS');
}

//Extra Activity 2 - Number method
// Here we are using the .toFixed method to cut down on the number of numbers after our decimal point.

const pi = 3.14159265359;
console.log(pi.toFixed(2));