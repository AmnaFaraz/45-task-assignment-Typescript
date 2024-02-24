type car = {
    manufacture :string
    model :string
    [key :string]: any;
}

function vehiclecar(manufacture :string, model :string, optional :Record<string, any>):car {
    return {
        manufacture,
        model,
        ...optional
    }
}

const mycar: car = vehiclecar("Nissan","Sentra", {color: "white" , year: "2017"})
console.log(mycar)