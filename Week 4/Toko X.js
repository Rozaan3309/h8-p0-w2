function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  let Sepatu = {
    product: 'Sepatu Stacattu',
    shoppers: [],
    leftOver: 10,
    totalProfit: 0
  }

  let Baju = {
    product: 'Baju Zoro',
    shoppers: [],
    leftOver: 2,
    totalProfit: 0
  }

  let Sweater = {
    product: 'Sweater Uniklooh',
    shoppers: [],
    leftOver: 1,
    totalProfit: 0
  }
  
  if(shoppers.length === 0){
      return []
  }

  for (let i = 0; i < shoppers.length; i++){
        if (shoppers[i].product === Sepatu.product && Sepatu.leftOver >= shoppers[i].amount){
            Sepatu.shoppers.push(shoppers[i].name)
            Sepatu.leftOver -= shoppers[i].amount
            Sepatu.totalProfit += listBarang[0][1] * shoppers[i].amount
        }

        if (shoppers[i].product === Baju.product && Baju.leftOver >= shoppers[i].amount){
            Baju.shoppers.push(shoppers[i].name)
            Baju.leftOver -= shoppers[i].amount
            Baju.totalProfit += listBarang[1][1] * shoppers[i].amount
        }

        if (shoppers[i].product === Sweater.product && Sweater.leftOver >= shoppers[i].amount){
            Sweater.shoppers.push(shoppers[i].name)
            Sweater.leftOver -= shoppers[i].amount
            Sweater.totalProfit += listBarang[2][1] * shoppers[i].amount
        }
    }
    let arrRes = [Sepatu, Baju, Sweater]
    return arrRes

}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]