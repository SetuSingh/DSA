const primeFactors = (num)=>{
    if (num == 1) {
        console.log(num)
    }

    if(num==2 || num==3){
        console.log(num)
    }

    if (num%2==0){
        while(num%2==0){
            console.log(2)
            num = num/2
        }
    }

    if (num%3==0 ){
        while(num%3==0){
            console.log(3)
            num = num/3
        }
    }

    for (var i=5; i*i <= num; i+=6){
        if (num%i == 0){

            while(num%i == 0){
                console.log(i)
                num = num/i
            }
        }

        if (num%(i+2) == 0){

            while(num%(i+2) == 0){
                console.log(i)
                num = num/(i+2)
            }
        }   
    }

    if (num >3){
        console.log(num)
    }
}

primeFactors(26)