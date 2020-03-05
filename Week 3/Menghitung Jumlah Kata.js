/*
function hitungJumlahKata(kalimat) {
    let wordCount = kalimat.split(" ")
    return wordCount.length
  }
*/

/*
function hitungJumlahKata(kalimat) {
    let temp2 = []
    for(let i = 0; i < kalimat.length; i++){
        let temp = ''
        for (let a = 0; a <= kalimat.length -1; a++){
            if(kalimat[a] == ''){
                return temp2.length
            }else if(kalimat[a] != ' '){
                temp += kalimat[a]
            } else if(kalimat[a] == ' ' && kalimat[a+1] != ' '){
                temp2.push(temp)
                temp = ''
            }
        }
    temp2.push(temp)
    return temp2.length
    }    
    
    
}
*/

function hitungJumlahKata(kalimat) {
    let spaceCount = 0
    for (let a = 0; a < kalimat.length; a++){
         if (kalimat[a] == ' ' && a != kalimat.length - 1){
            spaceCount += 1
        }
    }
    return spaceCount += 1
}
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5