function fpb(angka1, angka2) {
  let a = 1
  let faktor = 0
  while (a <= angka1){
    if ((angka1 % a === 0) && (angka2 % a === 0)){
        faktor = a
    }
    a++
  }
  return faktor
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1