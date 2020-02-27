var rows1;

for (var a = 1; a<=5; a++) {
        rows1 = '*'
        console.log(rows1);
    }


var rows2;

for (var a = 0; a<5; a++) {
    rows2 = '*'
    for(var b = 1; b<5; b++) {
        rows2 += '*'
    }

    console.log(rows2);
}

var rows3;

for (var a = 1; a<=5; a++) {
        rows3 = '*'
        for (var b = 1; b<a; b++) {
            rows3 += '*'
        }
        console.log(rows3);
    }
