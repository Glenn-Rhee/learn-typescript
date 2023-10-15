"use strict";
function sayHelloUser(name, age, hoby) {
    console.log(`Hallo selamat datang ${name}, wah rupanya umurmu adalah ${age}. ${hoby === "ngoding"
        ? "Wah hobby kita sama rupanya yaaa"
        : "Wahh hobi kamu ternyata " + hoby}`);
}
sayHelloUser("Ariel Rizki", 18, "ngoding");
function menghitungLuasSegitiga(alas, tinggi) {
    return (alas * tinggi) / 2;
}
const result = menghitungLuasSegitiga(45, 45);
console.log(result);
