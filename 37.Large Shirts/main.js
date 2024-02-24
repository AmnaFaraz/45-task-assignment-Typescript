"use strict";
function make_shirt(size = 'large', text = 'I love TypeScript') {
    console.log(`\n you have order a ${size} shirt that says ${text}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'Hello ');
