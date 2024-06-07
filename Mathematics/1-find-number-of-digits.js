const calculateNumberOfDigits = (num) => {
    var loop = true
    var count = 1
    while(loop){
        num = num/10
        if(num >= 1){
            count ++
        }else{
            loop =  false
        }
    }

    console.log(count)
}

calculateNumberOfDigits(9235)
