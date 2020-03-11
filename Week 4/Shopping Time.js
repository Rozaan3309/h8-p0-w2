function shoppingTime(memberId, money) {
    let itemlist = [
        ['Stacattu', 1500000],
        ['BajuZoro', 500000],
        ['BajuHN', 250000],
        ['SweaterUnik', 175000],
        ['CasingHP', 50000]
    ]

    let result = {
      memberId: memberId,
      money: money,
      listPurchased: [],
      changeMoney: 0
    }

    if (memberId === '' && money !== undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else if (money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }else if (memberId === undefined && money === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    let beforeBuy = money + 0
//    while (beforeBuy > 50000){
        if (beforeBuy >= itemlist[0][1]){
            result.listPurchased.push(itemlist[0][0])
            beforeBuy -= 1500000
        }  
      
        if (beforeBuy >= itemlist[1][1]){
            result.listPurchased.push(itemlist[1][0])
            beforeBuy -= 500000
        }

        if (beforeBuy >= itemlist[2][1]){
            result.listPurchased.push(itemlist[2][0])
            beforeBuy -= 250000
        }

        if (beforeBuy >= itemlist[3][1]){
            result.listPurchased.push(itemlist[3][0])
            beforeBuy -= 175000
        }

        if (beforeBuy >= itemlist[4][1]){
            result.listPurchased.push(itemlist[4][0])
            beforeBuy -= 50000
        }


    //}
    result.changeMoney = beforeBuy
    return result

}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
/*
    Sepatu brand Stacattu seharga 1500000
    Baju brand Zoro seharga 500000
    Baju brand H&N seharga 250000
    Sweater brand Uniklooh seharga 175000
    Casing Handphone seharga 50000
*/