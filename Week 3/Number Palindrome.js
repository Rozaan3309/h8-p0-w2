/*
function angkaPalindrome(num) {
    let temp = ''
    for (let a = num.length - 1; a >= 0; a--){
        temp += num[a]
    }
    if (temp == num){

    }
}

*/
function angkaPalindrome(num) {
    let newNum = (num + 1).toString()
    
    for (let a = Number(newNum); a >= 0; a--){
        let flippedNum = ''
        for(let b = newNum.length - 1; b >= 0; b--){
            flippedNum += newNum[b]
            if (flippedNum == newNum){
                return newNum
                }
        }
        newNum = (Number(newNum) +1).toString()
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001


/*
let num = 8
let newNum = num + 1

console.log(newNum)
console.log(num)
console.log(newNum.toString().length - 1)
for (let a = newNum.toString().length - 1; a >= 0; a--){
    num += 1
}

console.log(num)
*/