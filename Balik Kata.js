function balikKata(kata) {
    var b = ''
    for (var a = kata.length - 1; a >= 0; a--) {
        
         b += kata[a]
    }
    return b
  }
  
  
  console.log(balikKata('Hello World and Coders'));
  console.log(balikKata('John Doe'));
  console.log(balikKata('I am a bookworm'));
  console.log(balikKata('Coding is my hobby'));
  console.log(balikKata('Super'));