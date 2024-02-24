"use strict";
function vehiclecar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = vehiclecar("Nissan", "Sentra", { color: "white", year: "2017" });
console.log(mycar);
