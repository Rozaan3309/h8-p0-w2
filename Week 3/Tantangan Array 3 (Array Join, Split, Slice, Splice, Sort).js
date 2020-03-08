//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
function dataHandling2(processed) {
    processed.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    processed.splice(4, 2, "Pria", "SMA Internasional Metro");
    var splitted = processed[3].split("/")
    
    console.log(processed);
    switch (splitted[1]) {
        case splitted[1] ="01":
            console.log("Januari")
            break;
        case splitted[1] = "02":
            console.log("Februari")
            break;
        case splitted[1] ="03":
            console.log("Maret")
            break;
        case splitted[1] ="04":
            console.log("April")
            break;
        case splitted[1] ="05":
            console.log("Mei")
            break;
        case splitted[1] ="06":
            console.log("Juni")
            break;
        case splitted[1] ="07":
            console.log("Juli")
            break;
        case splitted[1] ="08":
            console.log("Agustus")
            break;
        case splitted[1] ="09":
            console.log("September")
            break;
        case splitted[1] ="10":
            console.log("Oktober")
            break;
        case splitted[1] ="11":
            console.log("November")
            break;
        case splitted[1] ="12":
            console.log("Desember")
            break;
        default:
            break;
    }
    
    var joinedDate = splitted.join("-")
    splitted.sort(function(a, b) {return b-a})
    console.log(splitted);
    console.log(joinedDate);
    var cappedName = processed[1].slice(0, 15)
    console.log(cappedName);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);