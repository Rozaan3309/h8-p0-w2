function angkaPalindrome(num) {
    let newNum = (num + 1).toString()

    while (true) {
        let flippedNum = ''
        for (let b = newNum.length - 1; b >= 0; b--) { // membalik
            flippedNum += newNum[b]
        }
        if (flippedNum == newNum) { // cek balik = asli
            return newNum
        
        } else {

            newNum = (Number(newNum) + 1).toString()
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001