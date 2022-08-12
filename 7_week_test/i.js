/*
 (5 taškai)
 (5 taškai)
 (5 taškai)
 (7 taškai)
 (7 taškai)
 (7 taškai)
 (10 taškų)
 (10 taškų)
 (10 taškų)*/

// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs.

function compare(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else if (num2 > num1) {
		return num2;
	} else {
		return num1, num2;
	}
}
console.log(compare(num1 = 30, num2 = 30));

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.

for (let i = 1; i <= 10; i+=1) {
    console.log(i);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.

for (let i = 0; i <= 10; i+=2) {
    console.log(i);
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.

var arr = [];
        for (var i = 0; i < 5; i++)
        {
            arr.push(Math.floor(Math.random() * 10) + 1)
        }
        console.log(arr);

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.

var number = 5;
var x = 0;
while(x !== number){
  x = Math.floor((Math.random() * 10) + 1);
  console.log(x);
}

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų.

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const size = rand(10, 30);

let add = 0;
for (let i = 0; i < size; i++) {
    let arr = [...Array(rand(20, 30))].map(_ => rand(10, 30));
    arr[arr.length - 1] = add;
    add = arr;
}
console.log(add);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės.

function makeid(){
    var text = "";
    var possible = "ABCD";
    for( var i=0; i < 100; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
console.log(makeid(""));

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kintamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė.


// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
//     skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)



// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX".

var x = '301.474.4062';
    
x = x.replace(/\D+/g, '')
     .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
console.log(x);