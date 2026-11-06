let numbers = [10, 20, 30, 40];

let total = numbers.reduce(function(sum, num) {
    return sum + num;
}, 0);

console.log(total);
