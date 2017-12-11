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

function anagrams(prefix, str) {
  //base case
  if (str.length <= 1) {
     console.log(prefix+str);
  }

  for (let i = 0; i < str.length; i++) {
      let current = str.substring(i, i+1);
      let previous = str.substring(0, i);
      let after = str.substring(i + 1);
      anagrams(prefix + current, previous + after);
  }
  
}

console.log(anagrams('', 'east'));


  