// Provide an array of strings, eg: [‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def, ‘gh’]. Write a function to
// find the strings’ length that appear most in this array. Writing the unit test function
// and provide some test-cases. The result for example array is [‘ab’, ‘cd’, ‘gh’]

const givenArray = ["a", "ab", "abc", "cd", "def", "gh"];

function findMostAppearedLength(array) {
     let item;
     let mostAppearance = 1;
     let count = 0;
     for (let i = 0; i < array.length; i++) {
          for (let j = i; j < array.length; j++) {
               if (array[i] == array[j])
                    count++;
               if (mostAppearance < count) {
                    mostAppearance = count;
                    item = array[i];
               }
          }
          count = 0;
     }
     return item;
}

function findStringsLength(arr) {
     let lengthOfArray = [];
     let result = [];
     for (let i = 0; i < arr.length; i++) {
          lengthOfArray.push(arr[i].length);
          lengthOfArray.sort();
     }
     let mostAppearedLength = findMostAppearedLength(lengthOfArray);
     for (let b = 0; b < arr.length; b++) {
          if (arr[b].length == mostAppearedLength) {
               result.push(arr[b]);
          }
     }
     return result;
}

console.log(findStringsLength(givenArray));