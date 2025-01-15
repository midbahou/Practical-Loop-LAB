
// ============================== Part 1: Fizz Buzz ===============================================
//*TODO: Loop through all numbers from 1 to 100.
for(num = 1; num <= 100; num++) {
    console.log(`The value of num is: ${num}`);
}

//*TODO: If a number is divisible by 3, log “Fizz.”
//*TODO: If a number is divisible by 5, log “Buzz.”
//*TODO: If a number is divisible by both 3 and 5, log “Fizz Buzz.”
//*TODO: If a number is not divisible by either 3 or 5, log the number.
for(num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`Fizz Buzz.`);
    } else if (num % 3 === 0) {
        console.log(`Fizz.`);
    } else if (num % 5 === 0) {
        console.log(`Buzz.`);
    } else {
        console.log(num);
    }
}


// for(n = 1; n <= 100; n++) {
//     if (n % 3 === 0 && n % 5 === 0) {
//         console.log(`Fizz Buzz.`);
//     } else if (n % 3 !== 0 && n % 5 !== 0) {
//         console.log(`This number ${n} is not divisible by either 3 or 5`);
//     } 
// }


// ============================== Part 2: Prime Time ===============================================

console.log("=============== Part 2 ==============");

//*TODO: Write a script that accomplishes the following:
//* Declare an arbitrary number, n.
//* Create a loop that searches for the next prime number, starting at n and incrementing from there.
//* As soon as you find the prime number, log that number and exit the loop.

let n = parseInt(prompt(`Enter a number here:`)); // Declaring an arbitrary number, n.
let nextPrime = n + 1; // starting at n and incrementing from there.
while (true) {
    let isPrime = true; // Assuming the number is prime

    // Check 
    for (let i = 2; i < nextPrime; i++) {
        if (nextPrime % i === 0) {
            isPrime = false; // since it's divisible by i, so it's not prime
            break; // exit the for loop
        }
    }
    if (isPrime) {
        console.log(`The Next Prime Number after ${n} is ${nextPrime}`);
        break; // To exit the while loop
    }

    nextPrime++; // Increment to check the next number
}
