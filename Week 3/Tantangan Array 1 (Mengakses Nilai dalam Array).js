function balikString(word){
    var flipped = ''
    for (var a = word.length - 1; a >= 0; a--) {
        flipped += word[a]
    }
    console.log(flipped)
}

balikString('!pmaws ym ni gniod uoy era tahW');