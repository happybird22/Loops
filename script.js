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
    let prime = true; // equation to find primes to avoid false positives
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

let csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let rows = csv.split(`\n`);

for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].split(`,`);
    console.log(cells[0], cells[1], cells[2], cells[3]);
}