'use strict';
//-----------------------------Counting Sheep-----------------------
// function sheepCount(fences) {
//   //base case
//   if (fences === 0) {
//     return 'Done';
//   }

//   //recursive case
//   console.log(`Another sheep jumps over the fence ${fences}`);
//   return sheepCount(fences -1);
// }

// sheepCount(10);

// function iterateSheepCount(fences) {
//   for (let i = 0; i <= fences; i++) {
//     console.log(`Another sheep jumps over the fence ${i}`);
//   }
// }

// iterateSheepCount(10);

//---------------------------Array Double----------------------------

// function doubleArray(arr) {
//   if (!arr.length){
//     return [];
//   }
//   return [arr[0]*2, ...doubleArray(arr.slice(1))];
// }

// function iterativeDoubleArray(arr) {
//   return arr.map(i => i*2);
// }
// let array = [1,2,3];

// console.log(doubleArray(array));
// console.log(iterativeDoubleArray(array));

//-----------------------------Reverse String------------------------

// function reverseString(str) {
//   if (str === '') {
//     return '';
//   }
//   const newChar = str[str.length-1];
//   return newChar + reverseString(str.slice(0,str.length-1));
// }

// function iterativeReverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString('hello'));
// console.log(iterativeReverseString('hello'));

//--------------------------------nth Triangular Number--------------------------

// function triangularNum(n) {
//   if(n === 1) {
//     return 1;
//   }
//   return n + triangularNum(n-1);
// }

// console.log(triangularNum(7));

// function iterativeTriangularNum(n) {
//   let total = 0;
//   for(let i = 0; i <= n; i++) {
//     total += i;
//     console.log(total);
//   }
// }

// iterativeTriangularNum(7);

//--------------------------------------stringSpliter----------------------------------
// function stringSplitter(str, sep) {
//   //base case
//   if (str.length === 0) {
//     return str;
//   }
//   //recursive case
//   const newChar = str[0];
//   if (newChar === sep) {
//     return stringSplitter(str.slice(1), sep);
//   }
//   return newChar + stringSplitter(str.slice(1), sep);
// }

// console.log(stringSplitter('a/b/c', '/'));

// function iterativeSplit(str, sep) {
//     return str.split('/').join('');
// }

// console.log(iterativeSplit('a/b/c'));

// //------------------------------------------Binary Representation------------------------

// function binaryRepresentation(num) {
//   //base case
//   if (num <= 0) {
//     return '';
//   }
//   //recursive case
//   const mod = (num%2);
//   return binaryRepresentation(Math.floor(num/2)) + mod;
// }
// console.log(binaryRepresentation(25));

//---------------------------------Anagrams-----------------------

// function anagrams(prefix, str) {
//   //base case
//   if (str.length <= 1) {
//     console.log(prefix + str);
//   }

//   for (let i = 0; i < str.length; i++) {
//     let current = str.substring(i, i + 1);
//     let previous = str.substring(0, i);
//     let after = str.substring(i + 1);
//     anagrams(prefix + current, previous + after);
//   }
// }

// console.log(anagrams('', 'east'));


//----------------------------------------------Animals Hierarchy----------------------------
// const AnimalHierarchy = [
//   { id: 'Animals', Parent: null },
//   { id: 'Mammals', Parent: 'Animals' },
//   { id: 'Dogs', Parent: 'Mammals' },
//   { id: 'Cats', Parent: 'Mammals' },
//   { id: 'Golden Retriever', Parent: 'Dogs' },
//   { id: 'Husky', Parent: 'Dogs' },
//   { id: 'Bengal', Parent: 'Cats' }
// ];

// // ==============================
// function traverse(AnimalHierarchy, parent) {
//   let node = {};
//   AnimalHierarchy.filter(item => item.Parent === parent).forEach(
//     item => (node[item.id] = traverse(AnimalHierarchy, item.id))
//   );
//   return node;
// }
// console.log(JSON.stringify(traverse(AnimalHierarchy, null), null, 2));


//----------------------------------------------------Factorial-------------------------------------

// function factorial(n) {
//   if(n === 0) {
//     return 1;
//   }
//   return n*factorial(n-1);
// }

// console.log(factorial(3));


//-------------------------------------------------------Fibonacci-----------------------------------------

// function fibonacci(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if(n === 1) {
//     return 1;
//   }
//   return fibonacci(n-2) + fibonacci(n-1);
// }

// console.log(fibonacci(7));


//-------------------------------------------------------FB Hierarchy-----------------------------------------

const FaceBookHierarchy = [
  { id: 'Zuckerberg', Parent: null },
  { id: 'Schroepfer', Parent: 'Zuckerberg' },
  { id: 'Bosworth', Parent: 'Schroepfer' },
  { id: 'Steve', Parent: 'Bosworth' },
  { id: 'Kyle', Parent: 'Bosworth' },
  { id: 'Andra', Parent: 'Bosworth' },
  { id: 'Zhao', Parent: 'Schroepfer' },
  { id: 'Richie', Parent: 'Zhao' },
  { id: 'Sofia', Parent: 'Zhao' },
  { id: 'Jen', Parent: 'Zhao' },
  { id: 'Schrage', Parent: 'Zuckerberg' },
  { id: 'VanDyck', Parent: 'Schrage' },
  { id: 'Sabrina', Parent: 'VanDyck' },
  { id: 'Michelle', Parent: 'VanDyck' },
  { id: 'Josh', Parent: 'VanDyck' },
  { id: 'Swain', Parent: 'Schrage' },
  { id: 'Blanch', Parent: 'Swain' },
  { id: 'Tom', Parent: 'Swain' },
  { id: 'Joe', Parent: 'Swain' },
  { id: 'Sandberg', Parent: 'Zuckerberg' },
  { id: 'Goler', Parent: 'Sandberg' },
  { id: 'Eddie', Parent: 'Goler' },
  { id: 'Julie', Parent: 'Goler' },
  { id: 'Annie', Parent: 'Goler' },
  { id: 'Hernandez', Parent: 'Sandberg' },
  { id: 'Rowi', Parent: 'Hernandez' },
  { id: 'Inga', Parent: 'Hernandez' },
  { id: 'Morgan', Parent: 'Hernandez' },
  { id: 'Moissinac', Parent: 'Sandberg' },
  { id: 'Amy', Parent: 'Moissinac' },
  { id: 'Chuck', Parent: 'Moissinac' },
  { id: 'Vinni', Parent: 'Moissinac' },
  { id: 'Kelley', Parent: 'Sandberg' },
  { id: 'Eric', Parent: 'Kelley' },
  { id: 'Ana', Parent: 'Kelley' },
  { id: 'Wes', Parent: 'Kelley' },
  
];

function traverse(FaceBookHierarchy, parent) {
  let node = {};
  FaceBookHierarchy.filter(item => item.Parent === parent).forEach(
    item => (node[item.id] = traverse(FaceBookHierarchy, item.id))
  );
  return node;
}
console.log(JSON.stringify(traverse(FaceBookHierarchy, null), null, 4));