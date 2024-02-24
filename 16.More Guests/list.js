"use strict";
let Guest_List = ['Ayeza Khan', 'Maya Ali', 'Yumna Zaidi'];
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear ' + Guest_List[i] + ',\n\nI would like to invite you to dinner.\n\nThank you!\n\n')
// }
let absent_Guest = 'Ayeza Khan';
let new_Guest = 'Minal Khan';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear ' + Guest_List[i] + ',\n\nI would like to invite you to dinner.\n\nThank you!\n\n');
}
console.log(`${absent_Guest} is not coming to the dinner.`);
console.log('Good News!I find a bigger dinner table so i am inviting 3 more guests to the dinner.');
Guest_List.unshift('Sarah khan');
Guest_List.splice(2, 0, 'Sajal Ali');
Guest_List.push('Hania Amir');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear ' + Guest_List[i] + ',\n\nI would like to invite you to dinner.\n\nThank you!\n\n');
}
