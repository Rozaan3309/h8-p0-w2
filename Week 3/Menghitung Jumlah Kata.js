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