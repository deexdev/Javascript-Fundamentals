//1. CONCAT = Menggabungkan 2 array atau lebih
let array1 = ["manggo", "apple"];
let array2 = ["pear", "strawberry"];
let newArray = array1.concat(array2);
console.log("concat ", newArray);
console.log("=================================");

//2. JOIN =  Menggabungkan seluruh element array
let join = newArray.join()
let jointo = newArray.toString()
console.log("join ", join);
console.log("jointo ", jointo);
console.log("=================================");

//3. PUSH = Menambahkan element pada akhir array
newArray.push("blueberry");
console.log("push ", newArray);
console.log("=================================");

//4. POP = Menghilangkan element terakhir di array
let pop = newArray.pop();
console.log("sebelum", newArray);
console.log("pop ", pop);
console.log("=================================");

//5. UNSHIFT = Menambahkan satu element pada depan array
newArray.unshift("orange");
console.log("unshift" ,newArray);
console.log("=================================");

//6. SHIFT = Menghapus dan mengambil satu element pertama array
let shift = newArray.shift()
console.log("sebelum", newArray);
console.log("shift", shift);
console.log("=================================");

//7. SLICE = Membuat salinan dari sebuah array
let slice = newArray.slice(0-3);
console.log("sebelum", newArray);
console.log("slice ", slice);
console.log("=================================");

//8. SPLICE = menghapus element array tertentu dan mengganti atau menambah isi array
console.log("sebelum", newArray);
let splice = newArray.splice(2, 1, "orange");
console.log("splice", splice);
console.log("sesudah", newArray);
console.log("=================================");

//9. Sort = mengurutkan element array
console.log("sebelum", newArray);
let sort = newArray.sort();
console.log("sort", sort);
console.log("=================================");

//10. Reverser = membalikan urutan array
console.log("sebelum ", newArray);
let reverse = newArray.reverse()
console.log("reverse ", reverse);
console.log("=================================");

//11. INDEXOF = mencari element tertentu jika tidak ditemukan maka balikannya adalah -1
console.log("sebelum ", newArray);
let indexof = newArray.indexOf("orange")
console.log(indexof);
console.log("=================================");


//12. LAST INDEX OF = mencari element terakhir dari kondisi tertentu
console.log("sebelum ", newArray);
let lasIndexof = newArray.lastIndexOf("strawberry")
console.log(lasIndexof);
console.log("=================================");

//13. filter = mengambil elements tertentu dengan kondisi tertentu
let example1 = [{nama: "dwi prasetiyo", umur: 20}, {nama: "evan naufal", umur: 11}, {nama: "prasetiyo", umur: 20}]
let filter = example1.filter(function (item) {
    return item.umur > 17
})


console.log(filter);
console.log("=================================");

// 14. Map = membuat array baru dengan hasil pemanggilan fungsi tertentu dan kondisi tertentu
let map = example1.map(function (item){
    return item.umur
})

console.log(map);
console.log("=================================");

// 15. Foreach =  print isi array
let fruit = newArray
console.log("sebelum", fruit);
console.log("haisl foreach :");
fruit.forEach(function (item) {
    if (item[0] == "s" || item[0] == "o") {
        console.log(item);
    }
})

