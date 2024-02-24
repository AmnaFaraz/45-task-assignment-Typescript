"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
const magician_2 = ["bilal", "umer", "zuhaib"];
function make_great_2(magicians) {
    const greatmagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i] + ' the great');
    }
    return greatmagicians;
}
const magicians_3 = ["bilal", "umer", "zuhaib"];
const greatmagicians_2 = make_great_2(magicians_3);
show_magicians(magicians_3);
show_magicians(greatmagicians_2);
