

let Guest_List :string[] = ['Ayeza Khan','Maya Ali','Yumna Zaidi'];

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear ' + Guest_List[i] + ',\n\nI would like to invite you to dinner.\n\nThank you!\n\n')

}

let absent_Guest :string = 'Ayeza Khan' ;

let new_Guest :string = 'Minal Khan' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear ' + Guest_List[i] + ',\n\nI would like to invite you to dinner.\n\nThank you!\n\n')

}

console.log(`${absent_Guest} is not coming to the dinner.`)