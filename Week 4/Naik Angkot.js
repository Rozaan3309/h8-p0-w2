function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  let res = []
  let point1 = 0
  let point2 = 0

  for (let i = 0; i < arrPenumpang.length; i++) {
        let detail = {
            penumpang: '',
            naikDari: '',
            tujuan: '',
            bayar: 0
        }
        for (let j = 0; j < arrPenumpang[i].length; j++) {
            if (arrPenumpang[i][j] === arrPenumpang[i][0]){
                detail.penumpang = arrPenumpang[i][j]
            }

            if (arrPenumpang[i][j] === arrPenumpang[i][1]){
                detail.naikDari = arrPenumpang[i][j]
            }

            if (arrPenumpang[i][j] === arrPenumpang[i][2]){
                detail.tujuan = arrPenumpang[i][j]
            }
            
        }

        for (let k = 0; k < rute.length; k++) {
            if (detail.naikDari === rute[k]){
                point1 = k
            }

            if (detail.tujuan === rute[k]){
                point2 = k
            }
            
        }


        detail.bayar = (point2 - point1) * 2000 
        res.push(detail)
    }

    return res
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]