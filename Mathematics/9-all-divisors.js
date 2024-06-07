const getAllDivisors = (num) =>{
    for(let i= 1; i <= num; i++){
        if(num%i == 0){
            console.log(i)
        }
    }
}

const getAllDivisorsOptimised = (num) =>{
    for(let i= 1; i * i <= num; i++){
        if(num%i == 0){
            console.log(i)
            if(i !== num/i){
                console.log(num/i)
            }
        }
    }
}

const getAllDivisorsOptimisedInOrder = (num) =>{
    let i;
    for(i= 1; i * i <num; i++){
        if(num%i == 0){
            console.log(i)
        }
    }

    for(; i>= 1; i--){
        if(num%i == 0){
            console.log(num/i)
        }
    }
}

getAllDivisorsOptimisedInOrder(25)