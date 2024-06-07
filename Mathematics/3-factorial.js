const findFactorial = (num) => {
    let out = 1
    for( var i = 1; i<= num; i++){
        out = out * i
    }
    console.log(out)
}

// this functions runs for O(n) as well but its worse in memory maangement. Call stacks are store n times.
const findFactorialRecursive = (num) => {
    if(num === 2 || num === 1 ||num === 0){
        return num
    }
    const output = findFactorialRecursive(num - 1)
    
    return output * num
}

findFactorial(3)

console.log(findFactorialRecursive(6))
