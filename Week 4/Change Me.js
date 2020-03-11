function changeMe(arr) {
    let num = 1
    let obj = {}
    let currentYear = 2020
    for (let i = 0; i < arr.length; i++){

        for (let j = 0; j < 4; j++){
            if (j === 3 && arr[i][j] > currentYear){
                obj.age = 'Invalid Birth Year'
            }else if(j === 0){
                obj.firstName = arr[i][j]
            } else if (j === 1){
                obj.lastName = arr[i][j]
            } else if (j === 2){
                obj.gender = arr[i][j]
            } else if (j === 3 && arr[i][j] !== undefined){
                obj.age = currentYear - arr[i][j]
            } else if (j === 3 && arr[i][j] === undefined){
                obj.age = 'Invalid Birth Year'
            }
        }
        console.log(num + '. ' + arr[i][0] + ' ' + arr[i][1], obj)
        obj = {}
        num++
    }
    
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""