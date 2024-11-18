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

// weil in dieser aufgabe die prüpfung immer wahr ist, wird immer die anweisung hinter if ausgeführt.
// die anweisung hinter else kommt niemals zur ausführung.
// Prüfoperatoren
// == Prüfung auf gleichheit im wert
//> größer als
//< kleiner als
//>= größer oder gleich
//<= kleiner oder gleich
//=== prüfung auf gleicheit im  wert und typ





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

if(fuehrerschein)
if(alter === 17){
    console.log("begleitet fahren")
{}
}else{
    console.log("fahrradfahren")
}
 

let zahl = 1

if(1){
    console.log("Die Zahl" + zahl + "nimmt den boolischen wert true an")
}else{
    console.log("Die Zahl" + zahl + "nimmt den boolischen wert false an")
}

// Positive Zahlen sind true. Die Ziffer null ist false.

console.log("Aufgabe 5")

// Auf einem Sparkonto soll bei einem positiven kontostand auf der Console stehen: "Zinsen berechnen"
//Wenn kein Guthaben existiert: "keine Zinsen"

let kontostand = 100

if (kontostand > 0){
    console.log("zinsen berechnen")
}else{
    console.log("keine Zinsen da kontostand")
}    

console.log(Aufgabe6)

// wenn sieg dann als 3 punkte
// wenn niederlage dann 0 punkte
// wenn unentschieden dann 1 punkte

let punkte = 10

if (punkte > 0){
    console.log("gewinner")
}else{
    console.log("verlierer")
}

if (spielausgang == "sieg")
    {
    console.log("es gibt 3 punkte")
}

if (spielausgang == "unentschieden"){
    console.log("es gibt 1 punkte")
}

if (spielausgang == "niederlage"){
    console.log("es gibt 0 punkte")
}
require ()