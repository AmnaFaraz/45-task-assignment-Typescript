function make_shirt(size :string = 'large', text :string = 'I love TypeScript'): void {
    console.log(`\n you have order a ${size} shirt that says ${text}`)
}

make_shirt();
make_shirt('medium')

make_shirt('small','Hello ')