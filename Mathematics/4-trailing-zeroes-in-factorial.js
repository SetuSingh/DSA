const findTrailingzeroesInFactorial = (num) => {
    let fact = 1
    for( var i = 1; i<= num; i++){
        fact = fact * i
    }
    
    let zeroesCount = 0
    console.log(fact)
    while (fact % 10 == 0){
        zeroesCount ++
        fact = fact/10
    }

    console.log(zeroesCount)
}


/* To figure out how many trailing zeroes are at the end of  26!, you need to understand what creates a trailing zero. Every trailing zero is created by a factor of 10, and each 10 is made up of a 2 and a 5 multiplied together.

In any factorial, there are usually plenty of factors of 2 (because even numbers are frequent), so we focus on counting the factors of 5. The number of pairs of 2s and 5s will determine the number of trailing zeroes.
Here's how we count the factors of 5 in  26!
26!:

First, count how many multiples of 5 are in the numbers from 1 to 26.

Numbers that are multiples of 5: 5, 10, 15, 20, 25.
That gives us 5 factors of 5.
Next, some numbers contribute more than one factor of 5. Specifically, 25 contributes an extra factor of 5 because 25 is  5×5.

So, we add one more factor of 5 for the number 25.
Adding these up, we get 5 (from the multiples of 5) + 1 (for the extra factor from 25) = 6 factors of 5.*/
const findTrailingzeroesInFactorialOptimized = (num) => {
    let out = 0
    for (let i = 5; i<= num; i *= 5){
        console.log(num, i,  num/i)
        out += num/i
    }
    console.log(Math.floor(out))
}

// findTrailingzeroesInFactorial(25)

findTrailingzeroesInFactorialOptimized(26)

