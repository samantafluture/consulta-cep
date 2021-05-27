/*

ARROW FUNCTION
==============

- todo lugar que vc vê uma função anônima é candidato a se tornar uma arrow function
- porém algumas coisas mudam dentro deste contexto! não é só estética
- this não funciona dentro de arrow function, ele aponta pro objeto window!

*/

// Anonymous Function
const test = function() {};

// Arrow Function 
const test = () => {}; // () -> é a declaração "function", => ->é a arrow


/* ===== */

// Anonymous Function
const test = function(a) {};

// Arrow Function 
const test = (a) => {};


/* ===== */

// Anonymous Function
const test = function(a) {};

// Arrow Function 
const test = (a) => {}; // opcão 1 -> com ()
const test = a => {}; // opcão 2 -> parâmetro sem (), apenas com 1 parâmetro


/* ===== */

// Anonymous Function
const test = function(a, b) {};

// Arrow Function 
const test = (a, b) => {}; // 2 parâmetros ou mais -> usar ()


/* ===== */

// Anonymous Function
const test = function(a, b,c) {
    return a + b + c;
};

// Arrow Function 
const test = (a, b, c) => { return a + b + c }; // retorno explícito

const test = (a, b, c) => a + b + c ; // retorno implícito