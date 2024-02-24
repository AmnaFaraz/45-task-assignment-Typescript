"use strict";
function make_album(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = make_album("Asim Azhar", "Ghalat Fehmi");
console.log(album);
album = make_album("Atif Aslam", "Wo Lamhe");
console.log(album);
album = make_album("Aima Baig", "Malang");
console.log(album);
