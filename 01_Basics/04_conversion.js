// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
//=======================================================================================

//  console.log("2" > 1);    true ; // because of auto conversion of "02" to 2
//  console.log("02" > 12);  false;  // because of auto conversion of "02" to 2


//=======================================================================================
// console.log(null > 0);   false ; null is coerced to 0
// console.log(null >= 0);  true ; null is coerced to 0
// console.log(null == 0);  false ; null is not coerced to 0

/*
In JavaScript, the comparisons involving null can be a bit tricky due to JavaScript's type coercion rules. Here's the explanation of each comparison:

console.log(null > 0); returns false

When using the greater-than operator (>), JavaScript attempts to coerce the operands to numbers before performing the comparison. null is coerced to 0. Since 0 is not greater than 0, the result is false.
console.log(null == 0); returns false

The equality operator (==) also performs type coercion. However, null is not considered equal to 0 when using the equality operator because of JavaScript's type coercion rules.
console.log(null >= 0); returns true

Similarly to the greater-than operator, the greater-than-or-equal-to operator (>=) attempts to coerce the operands to numbers. null is coerced to 0. Since 0 is equal to 0, the result is true.
JavaScript's type coercion can lead to unexpected results in some cases, which is why it's often recommended to use the strict equality operator (===) to avoid unintended type conversions. With strict equality, null === 0 would be false because null is not strictly equal to 0 in terms of value and type.
*/
//=======================================================================================

// console.log(undefined > 0);  //false; undefined is coerced to NaN
// console.log(undefined < 0);  //false; undefined is coerced to NaN
// console.log(undefined == 0); //false; undefined is not coerced to NaN; it is a different datatype

/*
In JavaScript, comparisons involving undefined can also be a bit tricky due to type coercion. Here's the explanation of each comparison:

console.log(undefined == 0); returns false

The equality operator (==) performs type coercion. undefined is not equal to 0 when using the equality operator because they are of different types.
console.log(undefined > 0); returns false

When using the greater-than operator (>), undefined is coerced to NaN (which stands for "Not-a-Number"). Since NaN is not greater than 0, the result is false.
console.log(undefined < 0); returns false

Similarly to the greater-than operator, undefined is coerced to NaN. Since NaN is not less than 0, the result is false.
In general, when dealing with comparisons involving undefined, NaN, and numeric values, the results can often be unexpected due to JavaScript's type coercion. It's a good practice to use the strict equality operator (===) and avoid relying on type coercion for more predictable results.
*/

// // === 

// console.log("2" === 2);