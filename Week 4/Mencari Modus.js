/*
function cariModus(arr) {
    let modus1 = []
    let compareModus = []
    let temp = 0
    for (let i = 0; i < arr.length; i++){
        temp = arr[i]
        for (let j = 0; j < arr.length; j++){
            if (arr[j] === temp){
                modus1.push(arr[j])
            }
        }
        if (modus1.length < 2){
            modus1 = []
        } else {
            compareModus.push([modus1[0], modus1.length])
            modus1 = []
        }
        
    }
    console.log(compareModus)
  }
    */
 function cariModus(arr) {
    let modusTemp = []
    let checker = 0
    let modusRes = 0
    for (let i = 0; i < arr.length; i++){
        let temp = 0
        for (let j = i; j < arr.length; j++){
            if (arr[j] === arr[i]){
                temp++
            }
        }

        if (temp >= 2){
            modusTemp.push([arr[i], temp])
        }

    }
    if (modusTemp.length === 1 && modusTemp[0] != undefined) {
        return modusTemp[0][0]
    } else if (modusTemp[0] === undefined){
        return -1
    } else if (modusTemp[0][0] === modusTemp [1][0]){
        return -1
    }

    checker = modusTemp[0][1]
    modusRes = modusTemp[0][0]
    for (let k = 0; k < modusTemp.length; k++){
        if (modusTemp[k][1] > checker){
            checker = modusTemp[k][1]
            modusRes = modusTemp[k]
        }
    }

    return modusRes
 }



  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1