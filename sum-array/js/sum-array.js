let arr = [2, 4, 8, 16, 32];

let sum = 0;

for(let i of arr){
    sum += i;
}

console.log("Sum is", sum);

/**
 * Multiply EACH number in both array and
 * add up all the products displaying the
 * sum
 */
const array1 = [ 7, 9, 5, 3, 25 ];
const array2 = [ 6, 13, 4, 7, 17 ];

const calculate = () => {
    let sum = 0;
    for(let i of array1){
        for(let j of array2){
            sum += i * j;
        }
    }

    console.log("New Sum is " , sum);
}

calculate();