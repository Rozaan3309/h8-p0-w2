function ubahHuruf(kata) {
    let result = ''
    let alphaList = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < kata.length; i++){
        for (let j = 0; j < alphaList.length; j++){
            if (kata[i] === alphaList[j] && alphaList[j] === alphaList[25]){
                result += alphaList[0]
            } else if (kata[i] === alphaList[j]){
                result += alphaList[j+1]
            }
        }
    }

    return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu