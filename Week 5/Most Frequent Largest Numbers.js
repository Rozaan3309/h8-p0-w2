function sorting(arrNumber) {
    var arrRes = arrNumber
    do{  
        var swapped = false
        for (var a = 0; a < arrNumber.length; a++){
          
            if (arrNumber[a+1] < arrNumber[a]){
                var temp = arrNumber[a]
                arrNumber[a] = arrNumber[a+1]
                arrNumber[a+1] = temp
                swapped = true
                }
        }
    } while (swapped === true)
    return arrRes
}

function getTotal(arrNumber) {
  var count = 1
  var sorted = arrNumber
  var biggestNum = sorted[sorted.length-1]
  for (var b = sorted.length - 2; b >= 0; b--){
      if (sorted[b] === biggestNum){
          count++
          biggestNum = sorted[b]
        } else {
            break;
        }
    }
    var res = 'angka paling besar adalah ' + biggestNum + ' dan jumlah kemunculan sebanyak ' + count + ' kali'
    if (sorted.length === 0){
        return ''
    } else {
        return res
    }

}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''