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

function reverseString(str) {
  if (str === '') {
    return '';
  }
  const newChar = str[str.length-1];
  return newChar + reverseString(str.slice(0,str.length-1));
}

function iterativeReverseString(str) {
  return str.split('').reverse().join('');
}



console.log(reverseString('hello'));
console.log(iterativeReverseString('hello'));
