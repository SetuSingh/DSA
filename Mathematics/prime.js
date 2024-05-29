const prime = (num)=>{
    if(num==2 || num==3){
        return true
    }
    if (num%2==0 || num%3==0 ){
        return false
    }

    for (var i=5; i*i <= num; i+=6){
        if (num%i == 0){
            return false
        }
    }

    return true
}
const testNumbers = [1, 2, 3, 4, 5, 7, 9, 11, 15, 17, 19, 23, 25, 29, 31, 37, 41, 43, 47, 51, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

testNumbers.forEach(num => {
    const isPrime = prime(num)
    if(isPrime){
        console.log(`${num} a prime number`);
    }
    
});

console.log(prime(65))