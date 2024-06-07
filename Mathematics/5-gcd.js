// For the sake of the question num1 <= num2
const gcd = (num1,num2)=>{
    let gcd = 1
    let counter = 1
    while (counter <= num1){
        if (num1%counter == 0 && num2%counter == 0){
            gcd = counter
        }
        counter+=1
    }

    console.log(gcd)
}

// For the sake of the question num1 <= num2
// As num1 is smaller than num2 then gcd of the two has to be smaller or equal to num1 so we start backwards from num1 instead of incrementing from 1 till num1
const gcdOptimised  = (num1,num2)=>{
    let gcd = num1
    while (gcd != 1){
        if (num1%gcd == 0 && num2%gcd == 0){
            console.log(gcd)
            return
        }
        gcd -= 1
    }
    console.log(gcd)
}

// Euclidean's Algo for gcd states that gcd(a,b) = gcd(a, b-a)
const gcdOptimisedByEuclideanAlgo = (num1,num2)=>{
    while( num1 !== num2){
        if ( num1 > num2){
            num1 = num1 - num2
        }else{
            num2 = num2 - num1
        }
    }
    console.log(num1)
}

const gcdOptimisedRecursive = (num1,num2)=>{
    if( num2 !== 0){
        return gcdOptimisedRecursive(num2 , num1%num2)
    }else{
        return num1
    }
}

const gcds = gcdOptimisedRecursive(141,7)
console.log(gcds)