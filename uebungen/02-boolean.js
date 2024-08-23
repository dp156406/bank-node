console.log("Booleans")
console.log("========")

console.log("Boolsche Werte sind Wahrheitswerte, die wahr oder falsch annehmen können.")

// Wahrheitswerte kennen wir bereits aus der Wenn-Funktion in Excel.

console.log("Aufgabe 01")

if(true){
console.log("Der Ausdruck ist wahr.")
}else{
    console.log("Der Ausdruck ist unwahr / falsch / false")
}

console.log("Aufgabe 02")

// In Erweiterung von Aufgabe 1 soll der Ausdruck dynamisch entweder true oder false sein.

let a = 5

if(a>6){
    console.log("Das ist wahr")
}else{
    console.log("Das ist falsch")
}

console.log("Aufgabe 3")

//Wenn die Schülerin 16 oder jünger ist, muss sie "fahrradfahren"
//Wenn sie 17 ist, darf sie "begleitet fahren"
//Wenn sie 18 ist darf sie fahren

let alter = 18;
let fuehrerschein = true;

if(alter <= 16 || fuehrerschein === false){   // Wenn die Schülerin 16 ist oder keinen Führerschein hat dann, fahrrad
    console.log("fahrradfahren")
}

if(alter === 17 && fuehrerschein === true){     //Wenn 17 und fuehrerschein, dann begleitet fahren
    console.log("begleitet fahren")
}

if (alter>17 && fuehrerschein === true){        //Wenn älter 17 und fuehrerschein, dann fahren
    console.log("fahren")
}

// Andere Lösung

if(fuehrerschein){
if(alter === 17){
    console.log("begleitet fahren")
else{}
}else{
    console.log("fahrradfahren"){}
}