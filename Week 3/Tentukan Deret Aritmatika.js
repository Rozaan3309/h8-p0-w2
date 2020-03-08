function tentukanDeretAritmatika(arr) {
    let result = false
    let selisih = arr[1] - arr[0]
    for (let i = arr.length - 1; i > 0; i--){
        if ((arr[i] - selisih) === arr[i-1]) {
            result = true
        }else {
            result = false
            return result
        }
        
    }
    
    return result
 }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
