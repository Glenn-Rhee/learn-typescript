// Function deklarasion, jika function menerima parameter maka disamping parameternya harus ada type anotationnya
// Ada dua jenis function,
// 1. Function yang mengembalikan sesuatu , jika sebuah function mengemblikan sesuatu maka tipe function tersebut harus berupa number / string / array/ yang lainnya
// 2. Function yang tiaak mengembalikan sesuatu, jika sebuah function tidak mengembalikan sesuatu maka tipe function tersebut adalah void

// tidak Mengembalikan sesuatu
function sayHelloUser(name: string, age: number, hoby: string): void {
  console.log(
    `Hallo selamat datang ${name}, wah rupanya umurmu adalah ${age}. ${
      hoby === "ngoding"
        ? "Wah hobby kita sama rupanya yaaa"
        : "Wahh hobi kamu ternyata " + hoby
    }`
  );
}

sayHelloUser("Ariel Rizki", 18, "ngoding");

// Mengembalikan sesuatu
function menghitungLuasSegitiga(alas: number, tinggi: number): number {
  return (alas * tinggi) / 2;
}

const result: number = menghitungLuasSegitiga(45, 45);
console.log(result);
