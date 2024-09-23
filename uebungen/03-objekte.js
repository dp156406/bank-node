console.log("Objekte")
console.log("=======")

//Bislangf speichern wir Werte in Variablen.
//Bsp: let vorname = Hans
//Jede Variable nimmt genau einen Wert auf. In dem Beispiel ist der Wert "Hans"
//In der realen Welt gibt es Objekte, über die mehrere Werte abgespeichert werden sollen.
//Bsp:Schüler im Schulverwaltungsprogramm.
//Interessierende Eigenschaften: Vorname, Nachname, Klasse, Geburtsort, Geburtsdatum
//Bislang haben wir das so gelöst:
//let vorname = "Hans"
//let Klasse = "GW23A"
//let...
//Problem: Die Eigenschaften stehen in keinem Zusammenhang.
//Um den Zusammenhang zwischen einzelnen Werten herzustellen, gibt es Klassen und Objekte.
//Zunächst legt der Programmierer zur Entwicklungszeit die Baupläne (Klassen) fest,
//nach denen Objekte zur Laufzeit erstellt werden. Und das geht so:

class Schueler{
constructor(){
    this.vorname
    this.nachname
    this.klasse
}
}

//Die Objekte werden nun aus dem Bauplan (=klasse) wie folgt erzeugt:

let schueler = new Schueler()
schueler.vorname = "Hans"
schueler.nachname = "Meyer"
schueler.klasse = "GW23A"

//Die Werte können wieder ausgehoben werden:

console.log("nachname: " + schueler.nachname + ", vorname: " + schueler.vorname)

let schueler2 = new Schueler()
schueler2.vorname = "Petrus"
schueler2.nachname = "Müller"
schueler2.klasse = "GW23A"

//Um aus dem Bauplan (=Klasse) ein konkretes Objekt zu erzeugen, sind 3 Schritte notwendig:
//1. DEKLARATION: let schueler
//                Bei der 

console.log("Aufgabe 1")
// Für eine Autovermietung sollen Autos verwaltet werden erstelle den Bauplan um dann drei Objekte zu instanzieren


class Auto{
    constructor(){
        this.Name
        this.Klasse
        this.Pferdestärke
        this.Sitzmöglichkeiten
    }
    }

let Dodge = new Auto();
let Jeep = new Auto();
let Ford = new Auto();

let Auto = new Auto()
Auto.Name = "Dodge"
Auto.Pferdestärke = "675 PS"
Auto.Klasse = "Sportwagen"
Auto.Sitzmöglichkeiten = "2 Sitzer"

console.log ("Name:" + Auto.Name + ", Pferdestärke: " + Auto.Pferdestärke)

let Auto2 = new Auto()
Auto2.Name = "Jeep"
Auto2.Pferdestärke = "310 PS"
Auto2.Klasse = "Geländewagen"
Auto2.Sitzmöglichkeiten = "4 Sitzer"


let Auto = new Auto()
Auto3.Name = "Ford"
Auto3.Pferdestärke = "150 PS"
Auto3.Klasse = "Kleinwagen"
Auto3.Sitzmöglichkeiten = "2 Sitzer"

console.log("Aufgabe 2")
//Deklairiere ein Objekt der realen Welt der eigenen Wahl.

