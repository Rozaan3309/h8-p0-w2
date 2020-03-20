function changeVocals (str) {
    let alphaList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let vocals = 'aiueoAIUEO'
    let res = ''
    for (var a = 0; a < str.length; a++){
        let vocalFlag = false
        for (var b = 0; b < vocals.length; b++){ //check apakah str di index tertentu adalah huruf vokal
            if (str[a] === vocals[b]){
                vocalFlag = true
                break;
            }
        }

        for (var c = 0; c < alphaList.length; c++){
            if (vocalFlag === true && str[a] === alphaList[c]){ //bila vokal, tambahkan huruf selanjut dari vokal tersebut ke variable res
                res += alphaList[c+1]
                break;
            } else if (vocalFlag === false){ //bila tidak vokal, langsung tambahkan huruf tersebut ke variable res
                res += str[a]
                break;
            }
        }
    }

    return res
}

function reverseWord (str) {
  let res = ''
  for (var a = str.length -1; a >= 0; a--){ //membaca variable str dari belakang lalu di masukan ke variable res
    res += str[a]
  }

  return res
}

function setLowerUpperCase (str) {
  let res = ''
  for (var a = 0; a < str.length; a++){
      if (str[a] === str[a].toUpperCase()){ //bila str index tertentu adalah huruf kapital, jadikan huruf kecil dan masukan ke variable res
        res += str[a].toLowerCase()
      } else {
          res += str[a].toUpperCase() //bila str index tertentu adalah huruf kecil, jadikan huruf kapital dan masukan ke variable res
      }
    }

    return res
}

function removeSpaces (str) {
  let res = ''
  for (var a = 0; a < str.length; a++){ //tambahkan str ke res, bila ditemukan spasi, maka dilewat
      if (str[a] === ' '){
          continue;
      } else {
          res += str[a]
      }
    }

    return res
}

function passwordGenerator (name) {
    if (name.length < 5) { //bila panjang input dibawah 5, maka menampilkan pesan
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    let one = changeVocals(name); //assign value function ke suatu variable agar mudah dipanggil function yg lain
    let two = reverseWord(one);
    let three = setLowerUpperCase(two);
    let four = removeSpaces(three);
    return four
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'