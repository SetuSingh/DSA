const checkIfPalindrome = (num) => {
    let temp = num
    let reverseNum = 0
    while (temp > 0){
        const last_num = temp % 10
        temp = Math.floor(temp / 10)
        if (temp > 0){
            reverseNum = reverseNum * 10 + last_num 
        }
        
    }
    console.log(reverseNum)
    console.log(reverseNum === num)
    
}

checkIfPalindrome(1221)
