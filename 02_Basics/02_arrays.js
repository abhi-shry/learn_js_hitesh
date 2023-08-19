const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 marvel_heros.push(dc_heros)

//console.log(marvel_heros);                         //Array inside array; this changes original array
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)    // ADDS two ARRAYS ; dont change the original array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  //SPREAD OPERATOR(...) used to concatinate array; VERY IMP

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //USED to simplify nested arrays.
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))    //boolean;
// console.log(Array.from("Hitesh"))       //convert input to ARRAY
// console.log(Array.from({name: "hitesh"})) // interesting; this line will give empty ARRAY, becaue we have not specified whether to make array of KEY or VALUE

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)); //convert input to ARRAY