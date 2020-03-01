
function konversiMenit(menit) {
    var jam = 1
    if ( menit - 60 >= 0 && (menit - 60).toString().length === 1){
        jam = 1 + ':0' + (menit - 60)
    }else if ( menit - 60 >= 0 && (menit - 60).toString().length === 2 && (menit - 60) < 60){
        jam = 1 + ':' + (menit - 60)
    }else if ( menit - 120 >= 0 && (menit - 120).toString().length === 1){
        jam = 2 + ':0' + (menit - 120)
    }else if ( menit - 120 >= 0 && (menit - 120).toString().length === 2){
        jam = 2 + ':' + (menit - 120)
    }else if (menit - 60 <=0 && menit.toString().length === 2){
        jam = '0:'+ menit
    }else if (menit - 60 <=0 && menit.toString().length === 1){
        jam = '0:0'+ menit
    }
    return jam
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

/*
var menit = 63
var jam;
 if ( menit - 60 >= 0 && (menit - 60).toString().length === 1){
    jam = 1 + ':0' + (menit - 60)
 }else if ( menit - 60 >= 0 && (menit - 60).toString().length === 2 && (menit - 60) < 60){
    jam = 1 + ':' + (menit - 60)
 }else if ( menit - 120 >= 0 && (menit - 120).toString().length === 1){
    jam = 2 + ':0' + (menit - 120)
 }else if ( menit - 120 >= 0 && (menit - 120).toString().length === 2){
    jam = 2 + ':' + (menit - 120)
 }else if (menit - 60 <=0 && menit.toString().length === 2){
     jam = '0:'+ menit
 }else if (menit - 60 <=0 && menit.toString().length === 1){
    jam = '0:0'+ menit
}
*/