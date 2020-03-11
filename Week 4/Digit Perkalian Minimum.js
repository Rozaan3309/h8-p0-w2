function digitPerkalianMinimum(angka) {
    let faktor = []
    for (let i = 1; i <= angka; i++){
      for (let j = i; j <= angka; j++){
          if (i * j === angka){
              faktor.push([i, j])
            }
        }
    }
    let digit = faktor[faktor.length - 1][0].toString().length + faktor[faktor.length - 1][1].toString().length
    return digit
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2