function urutkanAbjad(str) {
  let alphaList = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < alphaList.length; i++){
      for (let j = 0; j < str.length; j++){
          if (str[j] === alphaList[i]){
              result += str[j]
          }
      }
  }
  return result
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'