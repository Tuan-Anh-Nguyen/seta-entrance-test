// Provide an array of integers, eg: [1, 4, 2, 3, 5]. Write a function to find sum of
// integers on top 2. Writing the unit test function and provide some test-cases. The
// result for the example array is 9

const givenArray = [1, 4, 2, 3, 5];
const givenArray1 = [100, 10, 120, 30, 140, 50, 160, 70, 180, 90];

function getTotalOf2LargestNumbers(arr) {
     let sortedArray = arr.sort((a, b) => b - a);
     let slicedArray = sortedArray.slice(0, 2);
     let reducedArray = slicedArray.reduce((a, b) => a + b);
     return reducedArray;
}

console.log(getTotalOf2LargestNumbers(givenArray));
console.log(getTotalOf2LargestNumbers(givenArray1));