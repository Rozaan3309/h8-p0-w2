
//1. Melakukan Looping Menggunakan While
console.log( '1. Melakukan Looping Menggunakan While');

console.log('LOOPING PERTAMA');

var a = 2
while (a <=20) {
    
    console.log(a + ' - I love coding');
    a+=2
}

console.log('LOOPING KEDUA');
var a = 20
while (a >=2) {
    
    console.log(a + ' - I will become fullstack developer');
    a-=2
}

//2. Melakukan Looping Menggunakan For
console.log( '2. Melakukan Looping Menggunakan For');

console.log('LOOPING PERTAMA');

for (var a = 1; a<=20; a++) {
    console.log(a + ' - I love coding');
}

console.log('LOOPING KEDUA');
for (var a = 20; a>=1; a--) {
    console.log(a + ' - I will become fullstack developer');
}


//3. Angka Ganjil dan Genap
console.log('3. Angka Ganjil dan Genap');

//PERULANGAN 1
console.log('PERULANGAN PERTAMA');
var text = ''

for (var a = 1; a <=100; a++) {

    if (a % 2 == 0){
        text = 'Genap'
    } else{
        text = 'Ganjil'
    }
   
    console.log(text);
   
} 

//PERULANGAN 2
console.log('PERULANGAN KEDUA');

var text2 = ''

for (var a = 1; a <=100; a+=2) {

    if (a % 3 == 0){
        text2 = '3 KELIPATAN 3'
    } else{
        text2 = ' '
    }
   
    console.log(text2);
   
}

//PERULANGAN 3
console.log('PERULANGAN KETIGA');

var text3 = ''

for (var a = 1; a <=100; a+=5) {

    if (a % 6 == 0){
        text3 = '6 KELIPATAN 6'
    } else{
        text3 = ' '
    }
   
    console.log(text3);
   
} 

//PERULANGAN 4
console.log('PERULANGAN KEEMPAT');

var text4 = ''

for (var a = 1; a <=100; a+=9) {

    if (a % 10 == 0){
        text4 = '10 KELIPATAN 10'
    } else{
        text4 = ' '
    }
   
    console.log(text4);
   
} 