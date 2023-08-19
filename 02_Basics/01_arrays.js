/*
Array
The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

Description
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
*/
// array

const myArr = [0, 1, 2, 3, 4, 5]             //Array Declaratiion
const myHeors = ["shaktiman", "naagraj"]     //Array Declaratiion

const myArr2 = new Array(1, 2, 3, 4)         //Array Declaratiion
// console.log(myArr[1]);                    //index base eemet access

//++++++++++++++++++++++++++++++ Array methods

 //myArr.push(6)     //Add element in the end of array ; this changes original array
// myArr.push(7)    
// myArr.pop()       //remove element from the end of array ; this changes original array
//console.log(myArr);

// myArr.unshift(9)  //Add element in the front of array
// myArr.shift()     //remove element from the front of array

// console.log(myArr.includes(9));  //bolean
// console.log(myArr.indexOf(3));   //int; -1 mean not found

// const newArr = myArr.join()     //converts array to string

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3) //dont change th original array

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3) //both parameter are inclusive ALSO it changes the ORIGINAL ARRAY
// console.log("C ", myArr);
// console.log(myn2);