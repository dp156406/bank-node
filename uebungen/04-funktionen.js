console.log("FUNKTIONEN")
console.log("==========")
//Funktionen führen operationen aus
let laenge = 3
let breite = 5
let flaecheninhalt = laenge * breite
console.log("Flächeninhalt: " + flaecheninhalt)

//Jetzt die Berechnung in einer Funktion

//Zuerst wird die Funktion erstellt

function berechneFlaecheninhalt(laenge, breite){
    return laenge * breite
}

//In einem zweiten Schritt wird die Funktion aufgerufen:

console.log("Flächeninhalt: " + berechneFlaecheninhalt(10,10))

//Der Vorteil von Funktionen ist, dass die Berechnung im Rumpf nur einmal ausformuliert werden muss.
//Die Funktion kann dann an vielen stellen aufgerufen werden.

//So werden Funktionen erstellt:

//1. Das reservierte Wort function
//2. Ein sprechender Name. D.H., der Name soll beschreiben, was die Funktion macht.
//3. Runde Klammern am Ende nehmen parameter entgegen. 
// Parameter sind das was die Funktion als Input zur berechnung benötigt. Funktionen können mehrere oder auch keine Parameter entgegen nehmen.
//4. In den geschweiften Klammern wird die Logik ausprogrammiert.
//5. Mit dem reservierten Wort return wird das Ergebnis zurück gegeben.

console.log("Aufgabe1")
console.log("========")
// Berechne das Volumen eines Quaders mit einer Funktion:

function berechneVolumen(laenge,breite,hoehe){
    return laenge * breite * hoehe
}

console.log("Volumen: " + berechneVolumen(5,6,7))

console.log("Aufgabe 2")
console.log("=========")
// Berechne den Bruttopreis aus dem Nettopreis

function berechneBruttopreis(nettopreis,mehrwertsteuersatz){
    return nettopreis + mehrwertsteuersatz * nettopreis
}

console.log("Bruttopreis: " + berechneBruttopreis(100,0.19))

console.log("Aufgabe 3")
console.log("=========")
// Berechne die Schulnote aus der Abitur-Punktzahl

function punkteZuNote(punkte){
    if(punkte === 15 ) 
        return "1+"
    else if(punkte === 14) 
        return "1"
     else if(punkte === 10) 
        return "2-"
}

let punktzahl = 10
let note = punkteZuNote(10)

console.log("Note: " + note)

console.log("Aufgabe4")
console.log("========")

// Funktionen können auch innerhalb von Klassen definert werden.
//Beispiel: Kredit

class Kredit {
    constructor(laufzeit, betrag, zinssatz) {
        this.laufzeit = laufzeit; // in Jahren
        this.betrag = betrag;     // Kreditbetrag
        this.zinssatz = zinssatz; // Zinssatz in Prozent
    }

    berechneGesamtkostenAmEndeDerLaufzeit() {
        const gesamtZinsen = this.betrag * (this.zinssatz / 100) * this.laufzeit;
        return this.betrag + gesamtZinsen;
    }
}

// Beispiel für die Nutzung:
const kredit = new Kredit(5, 10000, 3); // 5 Jahre, 10.000 Euro, 3% Zinssatz
console.log(kredit.berechneGesamtkostenAmEndeDerLaufzeit()); // Ausgabe: 11500
