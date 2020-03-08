var hari = 31
var bulan = 8
var tahun = 1945

switch(bulan) {
    case 1:
        bulan = 'Januari'
        break;
    case 2:
        bulan = 'Februari'
        break;
    case 3:
        bulan = 'Maret'
        break;
    case 4:
        bulan = 'April'
        break;
    case 5:
        bulan = 'Mei'
        break;
    case 6:
        bulan = 'Juni'
        break;
    case 7:
        bulan = 'Juli'
        break;
    case 8:
        bulan = 'Agustus'
        break;
    case 9:
        bulan = 'September'
        break;
    case 10:
        bulan = 'Oktober'
        break;
    case 11:
        bulan = 'November'
        break;
    case 12:
        bulan = 'Desember'
        break;
}

var tanggal = hari + ' ' + bulan + ' ' + tahun


if (hari > 31 || hari < 1){
    tanggal = 'masukan hari yang benar!'
    console.log(tanggal);
} else if (bulan > 12 || bulan < 1){
    tanggal = 'masukan bulan yang benar!'
    console.log(tanggal);
} else if (tahun > 2200 || tahun < 1900){
    tanggal = 'masukan tahun antara 1900 sampai 2200!'
    console.log(tanggal);
} else {
    console.log(tanggal);
} 