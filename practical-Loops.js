
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



// ============================== Part 3: Feeling Loopy ===============================================
console.log("=============== Part 3 ==============");

//*TODO: Your task is to write a script that accomplishes the following:
    //* Loop through the characters of a given CSV string.
    //* Store each “cell” of data in a variable.
    //* When you encounter a comma, move to the next cell.
    //* When you encounter the “\r\n” sequence, move to the next “row.”
    //* Log each row of data.

// example of a CVS String without using arrays 
const cvsString = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

// let's create variables to stopre cells and rows data
let cell = "";
let row = "";

// Loop into each character in the CVS string
for (let i = 0; i < cvsString.length; i++) {
    const char = cvsString[i]; // reference to the current character

    // if the char is "," make a space and if it's \n go to the next row
    if (char === ",") {
        // A comma indicates the end of a cell
        row += cell + " ";  // Add the cell to the row
        cell = ""; // reset the cell
        // console.log(row); to print intermediate values of each cell.
    } else if (char === "\n") {
        // A newline indicates the end of a row
        row += cell; // Add the last cell to the row
        console.log(row); // Log the entire row
        // reset the cell and the row
        row = ""; 
        cell = "";
    } else {
        cell += char; // Accumulate characters for the current cell
    }
} 
// Log the last row if there's no trailing newline
if (cell) {
    row += cell;
    console.log(row);
}