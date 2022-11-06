// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om het geen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht 1: Cum Laude */

/* 1a: Script schrijven */

// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

let counter = 0;
for (let grade of grades) {
    if (grade >= 8) {
        counter += 1;
    }
}
console.log(counter + "\n")     // "\n"  voor opmaak output //

// ---- Verwachte uitkomst: 6



/* 1b: Omschrijven tot een herbruikbare functie */

// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude
// studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld:
// [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function cumLaude(Array) {
    let counter = 0;
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] >= 8){
            counter += 1;
        }
    }return counter;
}
console.log(cumLaude(grades));
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]) + "\n");     // "\n" voor opmaak output //

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3



/* Opdracht 2: Gemiddeld cijfer */

/* 2a: Script schrijven */

// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met
// de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

let sum = 0;
for (let grade of grades) {
    sum +=grade;
}average = sum / grades.length;

console.log(average + "\n")     // "\n" voor opmaak output //

// ---- Verwachte uitkomst: 6.642857142857143



/* 2b: Omschrijven tot een herbruikbare functie */

// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer
// teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of
// [8, 9, 4, 6, 10] Log het antwoord in de terminal.

function averageGrade(Array) {
    let sum = 0;
    for (let i = 0; i < Array.length; i++) {
        sum += Array[i];
    }
    return sum / Array.length;
}
console.log(averageGrade(grades));
console.log(averageGrade([6, 4, 5]));
console.log(averageGrade([8, 9, 4, 6, 10]) + "\n");     // "\n" voor opmaak output //

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4



/* 2c: Afronden op twee decimalen */

// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function twoDecimalGrade(Array) {
    const decimal = averageGrade(Array)
    return decimal.toFixed(2)
}
console.log(twoDecimalGrade(grades));
console.log(twoDecimalGrade([6, 4, 5]));
console.log(twoDecimalGrade([8, 9, 4, 6, 10]) + "\n");     // "\n" voor opmaak output //


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */

// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier
// geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

grades.sort();
let last = grades[grades.length - 1];
if (grades[0] === 10)
    console.log(10);
else
    console.log(last + "\n");       // "\n" voor opmaak output //

// ---- Verwachte uitkomst: 9



/* 3b: Omschrijven tot een herbruikbare functie */

// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function highestGrade(Array) {
    Array.sort();
    let last = Array[Array.length - 1];
    if (Array[0] === 10)
        console.log(10);
    else
        console.log(last);
}
highestGrade(grades)
highestGrade([6, 4, 5])
highestGrade([8, 9, 4, 6, 10])

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
