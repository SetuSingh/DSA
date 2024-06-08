const computePowerIterative= (num, pow) => {
    let res = 1;
    while (pow >0){
        if( pow %2 !== 0){
            res = res * num
        }
        num = num * num
        pow = Math.floor(pow/2)
    }console.log(res)
}

computePowerIterative(3,3)