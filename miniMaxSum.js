'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    arr.sort(function(a,b){return a-b});

   const min = arr.slice(0,-1);
   const max = arr.slice(1);
   let minSum = 0;
   let maxSum = 0;
   
   for(var i = 0;i<min.length;i++){
       minSum+=min[i];
       maxSum+=max[i];
       
   }
   console.log(minSum.toString()+" "+maxSum.toString());

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
