function sandwich(...items :string[]): void {
    console.log("sandwich details:")

    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("chow down your sandwich\n")


sandwich('cheese','tomato','chicken')
sandwich('lettuce','beef','ketchup')
sandwich('egg','mayonnaise','cucumber')