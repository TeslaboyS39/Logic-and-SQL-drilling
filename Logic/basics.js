// All solutions without built-in function; language used: Indonesian or English

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

// Ans_2:
let count = 0;
let state = true;
while (state) {
  lotre = Math.floor(Math.random() * 50 + 1);
  console.log(lotre);
  count++;
  if (lotre % 5 === 0) {
    console.log(`${lotre} - anda menang setelah percobaan ke-${count}`);
    state = false;
  }
}

// Ans_3
let num = 3;
let result = "";

for (let i = 0; i < num; i++) {
  result += "*";
}
console.log(result);
