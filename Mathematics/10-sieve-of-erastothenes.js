const prime = (num)=>{
    if(num==2 || num==3){
        // console.log(num)
        return true
    }
    if (num%2==0 || num%3==0 ){
        return false
    }

    for (var i=5; i*i <= num; i+=6){ 
        if (num%i == 0 || num%(i+2) == 0){
            return false
        }
    }
    // console.log(num)
    return true
}

const findAllPrime = (num) => {
    for(i=2; i<=num;i++){
        prime(i)
    }
}

const sieveOfErastothenes = (num) => {
    let arr = new Array(num+1).fill(true);

    arr[0] = false;
    arr[1] = false;

    for(i=4; i<num;i+=2){
        arr[i] = false
    }
    for(i=6; i<num; i+=3){
        arr[i] = false
    }
    for(i=10; i<num;i+=5){
        arr[i] = false
    }
    console.log(arr)
}

const sieveOfErastothenesOptimised = (num) => {
    let arr = new Array(num+1).fill(true);

    arr[0] = false;
    arr[1] = false;

    for(let i=2; i <= num; i++){
        if(prime(i)){
            console.log(i)
            for(let j= i*i; j <= num; j = j+i){
                // console.log(j)
                arr[j] = false
            }
        }
    }
}

sieveOfErastothenesOptimised(25)