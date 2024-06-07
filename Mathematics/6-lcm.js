const lcm = (num1,num2)=>{
    let lcm = num1 > num2 ? num1 : num2
    while (lcm%num1 !== 0 || lcm%num2 !== 0){
        lcm+=1
    }
    console.log(lcm)
    return lcm;
}

// lcm(4, 6)

// I think this is the most efficient approach but idk why people are using euclideans algo. Its right after this one
const lcmOptimised  = (num1,num2)=>{
    if(num1%2==0 && num2%2 == 0){
        if(num1%num2 == 0 || num2%num1 == 0){
            console.log(num1 > num2 ? num1 : num2)
            return (num1 > num2 ? num1 : num2)
        }

        console.log((num1*num2 )/2 , 'here')
        return (num1*num2)/2;
    }

    console.log((num1*num2))
    return (num1*num2);
}
// lcmOptimised(4, 6)



// Euclidean's Algo states that => a*b = gcd(a, b) * lcm(a, b)
const gcdOptimisedRecursive = (num1,num2)=>{
    if( num2 !== 0){
        return gcdOptimisedRecursive(num2 , num1%num2)
    }else{
        return num1
    }
}

// This runs faster :/
const lcmOptimisedByEuclideanAlgo = (num1,num2)=>{
    return num1*num2/gcdOptimisedRecursive(num1,num2)
}


// Start time
const startTime = performance.now();

// Call the function
const result = lcmOptimisedByEuclideanAlgo(4,6);

// End time
const endTime = performance.now();

// Calculate the duration
const duration = endTime - startTime;

console.log(`Execution time: ${duration} milliseconds`);
console.log(`Result: ${result}`);