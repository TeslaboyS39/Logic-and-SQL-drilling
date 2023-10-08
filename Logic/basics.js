// All solutions without built-in function; language used: Indonesian or English

/* 
1. Diketahui di dalam sebuah perusahaan Z total bersih gaji karyawan dihitung dari gaji pokok 
   sesuai posisi, ditambah tunjangan karyawan dan dikurangi angsuran hutang ke perusahaan.

   Gaji bersih = gaji pokok + tunjangan - hutang

   Setiap posisi memiliki gaji pokok yang berbeda:
   	-Frontend Developer = 11_000_000
	-Backend Developer = 10_000_000
   
   Tunjangan karyawan hanya diberikan kepada karyawan yang sudah menikah sebesar 300_000

   Apabila karyawan sudah memiliki anak, maka tiap anak akan diberikan tunjangan sebesar 100_000

   Q: Buatlah algoritma yang akan menentukan total gaji bersih karyawan yang diterima karyawan 
      setelah dikurangi angsuran hutang, dan analisa variabel apa saja yang dibutuhkan. Setelah 
      membuat algoritma, buatlah program berdasarkan algoritma yang telah dibuat!
*/

// Ans_1:
let name = "Max";
let position = "Backend Developer";
let marriedStatus = true;
let childNumber = 1;
let debt = 350000;
let gajiPokok = 0;

if (position === "Backend Developer") {
  gajiPokok = 10000000;
} else if (position === "Frontend Developer") {
  gajiPokok = 11000000;
}

let tunjanganMarried = 0;
let tunjanganAnak = 0;

if (marriedStatus === true) {
  tunjanganMarried = 300000;
} else {
  tunjanganMarried = 0;
}

if (childNumber !== 0) {
  tunjanganAnak = childNumber * 100000;
} else {
  tunjanganAnak = 0;
}

let totalTunjangan = tunjanganMarried + tunjanganAnak;

let gajiBersih = gajiPokok + totalTunjangan - debt;

console.log(gajiBersih);
