function pasanganTerbesar(num) {
    let temp = 0
    for(let i = 0; i < num.toString().length; i++){
        if(Number(num.toString()[i] + num.toString()[i+1]) > temp){
            temp = Number(num.toString()[i] + num.toString()[i+1])
        }
    }
    return temp
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99