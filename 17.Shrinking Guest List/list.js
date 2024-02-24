"use strict";
let Guest_List = ['Ayeza Khan', 'Maya Ali', 'Yumna Zaidi'];
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear ' + Guest_List[i] + ',\n\nI would like to invite you to dinner.\n\nThank you!\n\n')
// }
let absent_Guest = 'Ayeza Khan';
let new_Guest = 'Minal Khan';
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear ' + Guest_List[i] + ',\n\nI would like to invite you to dinner.\n\nThank you!\n\n')
// }
console.log(`${absent_Guest} is not coming to the dinner.`);
console.log('Good News!I find a bigger dinner table so i am inviting 3 more guests to the dinner.');
// added 3 guests to array.
Guest_List.unshift('Sarah khan');
Guest_List.splice(2, 0, 'Sajal Ali');
Guest_List.push('Hania Amir');
// here i had printed 6 guests array.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear ' + Guest_List[i] + ',\n\nI would like to invite you to dinner.\n\nThank you!\n\n');
}
// sorry message for not inviting the guests.
console.log('\nSorry!I cannot arrange big dinner table, only two peoples will be invited');
// here i removed the guests.
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry ${remove_Guest}, you are not invited to dinner.`);
}
// left guests list.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear ' + Guest_List[i] + ',\n\nyou are still invited to dinner.\n\nThank you!\n\n');
}
//  removed all the guests from array.
Guest_List.splice(0, 2);
console.log(Guest_List);
