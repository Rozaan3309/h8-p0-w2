function palindrome(kata) {
    let temp = ''
    for(let a = kata.length - 1; a >= 0; a--){
        temp += kata[a]
    }

    if (temp === kata){
        return true
    }else {
        return false
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false