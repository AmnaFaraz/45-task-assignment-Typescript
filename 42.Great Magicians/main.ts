function show_magicians(magicians :string []): void {

    for (const magician of magicians ) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

function make_great(magicians :string []): void {
     for (let i = 0; i < magicians.length; i++) {
         magicians[i] = magicians[i] +  ' the great'
}
}

const magician_2 :string[] = ["bilal","umer","zuhaib"];
make_great(magician_2)
show_magicians(magician_2)