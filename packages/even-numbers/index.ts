// tens place = odd
// hundreds place = even
// thousands place = odd
// ten thousands place = even
// hundred thousands place = odd
// millions place = even
// ten millions place = odd
// hundred millions place = even

// shave off the last digit of a number until the there are no digits left to shave off (0)
// if the number of digits removed is odd, then the number is odd
// if the number of digits removed is even, then the number is even
// return the total number of numbers with digits removed is event

// spacetime is o(1)
// runtime is o(nm) where n = number of numbers and m = number of digits in the largest number


export function countTotalEventDigits(numbers: number[]) {
    let totalEvenNumbers = 0;
    for (let number of numbers) {
        let totalRemoved = 0;
        while (number > 0) {
            number = Math.floor(number / 10)
            totalRemoved++;
        }
        if (totalRemoved % 2 === 0) {
            totalEvenNumbers++;
        }
    }
    return totalEvenNumbers;
}
