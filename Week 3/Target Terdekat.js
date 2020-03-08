function targetTerdekat(arr) {
    let coordiO = 0
    let coordiX = []
    let resultTemp = []
    let result = 0
    for (let i = 0; i < arr.length; i++){ //cek lokasi si O dan si X
        if (arr[i] === 'o' && arr[i] !== ' '){
            coordiO = i+1
        } else if (arr[i] === 'x' && arr[i] !== ' '){
            coordiX.push(i+1)
        }
    }

    for (let j = 0; j < coordiX.length; j++){ //hitung selisih jarak antar O dan X
        if (coordiX[j] > coordiO){
            resultTemp.push(coordiX[j] - coordiO)
        }else if (coordiX[j] < coordiO){
            resultTemp.push(coordiO - coordiX[j])
        }
    }
    
    coordiX.push(0)
    if(coordiX[0] === 0){ //cek apakah X ada atau tidak
        return result
    }
    result = resultTemp[0]
    for (let k = 0; k < resultTemp.length; k++){ //cek selisih jarak mana yang terkecil
        if (coordiX.length === 1){
            return result = 0
        }else if(resultTemp[k] < result){
            result = resultTemp[k]
        }
    }

    return result
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2