// berbagai macam tipe
// Jika sudah diberikan tiep datanya maka, variable tersebut tidak bisa diisi dengan tipe data yang bukan dri yang elah di inisiasi

const grade: number = 45;
const username: string = "Ariel Rizki Muhtamad Bakri";
const isResgistered: boolean = true;

console.log(
  `Hallo nama saya ${username}, saya ${
    isResgistered ? "sudah" : "belum"
  } register`
);

// Any type
// Any type berfungsi agar varible tersebutdapat diisi dengan tipe data apa saja
// jika mengdeklarasikan tanpa mengisi value dri varibale, maka typescript akan menganggapnya sebagai any type
let password;
password = 123456;
password = "123456";
// baris" kode tersebut tidak akan error

// Jika ingin memiliki tipe data yang lebih dari satu adalah dengan cara
let pass: number | string = "123456";
pass = 123456;

// Array
// untuk memberikan tipe data array adalah dengan cara seperti ini
// array of number
const arNumber: number[] = [1, 2, 3, 4, 5, 6];

// array of bool
const arrBool: boolean[] = [true, false];

// array of string
const arrString: string[] = ["Hallo", "Nama", "Saya", "Ariel"];
console.log(arrString);

// jika ingin isi dari array tipe datany lebih dari satu maka gunakan operator or
const arrStringOrNum: (string | number)[] = [
  "Hallo nama saya",
  "Ariel",
  "Saya berumur",
  18,
];

// Cara inisiasi tipe data array nested
const arrNestedNum: number[][] = [
  [1, 2, 3, 4],
  [4, 5, 6, 7, 8],
];

// String array nested
const arrNestedString: string[][] = [
  ["Hallo", "Ariel"],
  ["Hallo", "Rizki"],
];

// string | number array nested
const arrNstedStringOrNum: (string | number)[][] = [
  ["Ariel", 18],
  ["Farrel", 15],
];

// The tuple type
// tuple type digunakan untuk memberikan type terhadap sebuah array
const tupleNumStr: [number, string] = [1, "asdasd"];
// Maka pada tipe data tersebut, panjang dari arraynya harus dua tidak boleh lebih atau kurang, dan index pertamanya harus number, serta index keduanya harus string

// Enum type
// Merupakan sebuah type data yang dapat mendefinisikan berdasarkan string atau number, cara penulisannya adalah PascalCase

// Berdasarkan number :
const enum RollStudents {
  ariel,
  rizki,
}

let student: RollStudents = RollStudents.ariel;
console.log(student); // 0

student = RollStudents.rizki;
console.log(student);

// Jika menginginkan index dimulai dari 1 atau lain sebagainya maka gunakan sintaks sperti ini
const enum Students {
  abi = 1,
  aldi,
  ariel,
  aqila,
  agata,
}

// Berdasarkan string
// type enum berdasarkan string perilakunya mirip seperti object
const enum Peoples {
  country = "Indonesia",
  region = "Jakarta",
  kodepos = "12510",
}

// Untuk mengaksesnya dapat dilakukan dengan cara seperti
const country: Peoples = Peoples.kodepos;
console.log(country); // Indonesia

// Heterogeneous Enums
// Meruapakn sebuah tipe data enum yang didalamnya berupa string dan juga number
const enum PeopleInJakarta {
  id = 1,
  name = "Ariel Rizki Muhtamad Bakri",
  address = "Jln. Kemuning Raya no II, RT. 08, RW. 06, Kel. Pej. Timur, Kec. Ps. Minggu, Jakarta Selatan",
}

const jkt: PeopleInJakarta = PeopleInJakarta.name;
console.log(jkt);
  
let language: string = String("Ariel".length);
console.log(language);

