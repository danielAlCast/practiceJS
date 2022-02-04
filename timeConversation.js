'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let militaryHour = s.substr(2,6);
    let dayMoment = s.substr(s.length-2);
    let hour = s.substr(0,2)
    hour = parseInt(hour);
    
    if(dayMoment ==='PM' && hour != 12 ){
        hour+=12;
        if(hour ===24){
            militaryHour = '00'+militaryHour;
        }else if(hour>9){
            militaryHour = hour.toString()+militaryHour;
        }else{
            militaryHour = '0'+hour.toString()+militaryHour;
        }
    }else if(dayMoment ==='AM' && hour === 12 ){
        militaryHour = '00'+militaryHour;
    }else if(dayMoment === 'PM' && hour === 12 ){
        militaryHour = '12'+militaryHour;
    }else{
        
        militaryHour = '0'+hour.toString()+militaryHour;
    }
    
    
    return militaryHour

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
