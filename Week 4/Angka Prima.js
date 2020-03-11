function angkaPrima(angka) {
    for (let a = 2; a < angka; a++){
        if (angka % a === 0){
            return false
        }
    }
    if(angka === 1){
        return false
    }
    return true
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false