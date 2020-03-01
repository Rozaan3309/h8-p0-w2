function bandingkanAngka(angka1, angka2) {
    var hasil;
    if (angka1 < angka2) {
        hasil = true
    } else if (angka1 > angka2) {
        hasil = false
    } else {
        hasil = -1
    }
    return hasil
  }
  
  
  console.log(bandingkanAngka(5, 8));
  console.log(bandingkanAngka(5, 3));
  console.log(bandingkanAngka(4, 4));
  console.log(bandingkanAngka(3, 3));
  console.log(bandingkanAngka(17, 2));