/*
We should be very carefull while converton variable of one type to another
*/

let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
//console.log(2**3**2); 2 to the power 3 to the power 2
// console.log(2/3);
// console.log(2%3); modulo/remainder

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 * str2
//  console.log(str3); //concatination
//  console.log(str3);  //NaN ; inpace of +, if we use -,/,* o/p will be NaN

//console.log("1" + 2);         //=>12
//console.log(1 + "2");         //=>12
//console.log("1" + 2 + 2);     //=>121
//console.log("1" + (2 + 2));     //=>14
//console.log(1 + 2 + "2");     //=>32
//console.log(1 + "2" + 2);       //=>122 same in java


// console.log( (3 + 4) * 5 % 3);

//console.log(+true); check below consept for "boolean to number" conversion
/*  let b1=true;
    let b2=false;

    let nu1=Number(b1);
    let nu2=Number(b2);
    console.log(nu1); //->1
    console.log(nu2); //->0  */


// console.log(+"");  -> 0  // due to string to number conversion

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
//console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

//SELF NOTES
//STRING TO NUMBER
let Sname= "undefined";
//console.log(typeof Sname); //String

let Snam1=Number(Sname);
//console.log(typeof Snam1);// number
//console.log(Snam1); //0 when input is emptystring or "0"; Nan(Not a Nuber) when other string ex "null" etc
//===========================================

//STRING TO Boolean
// let Sname= "-2";
// let Snam1=Boolean(Sname);
// console.log(typeof Snam1);// //boolean
// console.log(Snam1);//  true when string has any(+ve/-ve/0) value, else(empty string) false
//===========================================

/*
prefix -   a=++b
execution: first value of b variable will be incremented and then the 
incremented value of b will be assigned to a

postfix -  x=y++
execution: first value of y will be assigned to x and then the 
value of y variable will be incremented

*/