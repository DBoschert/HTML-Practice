const nbrs = [96, 59, 4, 68, 58, 48, 17, 76, 32, 71, 11, 6, 3, 32, 85, 13, 60, 1, 27, 15, 96, 31, 75, 5, 2];

let min = 10000;
let max = 0;
let sum = 0;
for(let i of nbrs){
    if(i > max){
        max = i;
    }
    if(i < min){
        min = i;
    }
    sum += i;
}

let avg = sum / nbrs.length;

console.log(` Sum: ${sum}\n Min: ${min}\n Max: ${max}\n Avg: ${avg}`);