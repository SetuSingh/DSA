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


// const findTrailingzeroesInFactorialOptimized = (num) => {
//     if(num > 5){
//         console.log(Math.floor(num / 5))
//         console.log(Math.floor(num / 2))
//     }else{
//         console.log(0)
//     }
// }

const findTrailingzeroesInFactorialOptimized = (num) => {
    let out = 0
    for (let i = 5; i<= num; i *= 5){
        console.log(num, i,  num/i)
        out += num/i
    }
    console.log(out)
}

// findTrailingzeroesInFactorial(25)

findTrailingzeroesInFactorialOptimized(100)

