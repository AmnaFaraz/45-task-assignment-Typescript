function city_country(city :string, country :string ): string {
    return`${city}, ${country}`
} 

let country_1 = city_country('"Lahore' , 'Pakistan"')
let country_2 = city_country('"Muscat' , 'Oman"')
let country_3 = city_country('"Doha' , 'Qatar"')

console.log(country_1)
console.log(country_2)
console.log(country_3)