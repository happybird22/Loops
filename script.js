// Fizz Buzz

for (let i = 0; i <= 100; i++) {
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Prime Time

let n = 14;
let num = n;

while (true) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime && num > 1) {
        console.log(num);
        break;
    }

    num++;
}

// Feeling Loopy

