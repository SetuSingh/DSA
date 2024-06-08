const computePower= (num, pow) => {
    let x = 1
    for (let i=0; i < pow; i++){
        x = num * x
    }
    console.log(x)
}

const computePowerOptimised= (num, pow) => {
    let x = 1
    if(pow%2 == 0) {
        for (let i=0; i < pow/2; i++){
            x = num * x
        }
        console.log(x * x)
    }else{
        for (let i=0; i < pow - 1; i++){
            x = num * x
        }
        console.log(x * num)
    }
}

const computePowerRecursive= (num, pow) => {
    if (pow === 0){
        return 1;
    }
    let temp = computePowerRecursive( num, Math.floor(pow/2))
    if (pow % 2 == 0){
        return temp
    }else {
        return (temp) * num
    }
}

console.log(computePowerRecursive(3,3))