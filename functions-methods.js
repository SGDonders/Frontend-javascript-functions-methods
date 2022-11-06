// Je gaat functies schrijven die we kunnen hergebruiken om sommige e-mailadressen te checken. Nu zul je gaan merken hoe
// handig functies kunnen zijn! Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op
// EdHub over het String Object er even bij.

/* Opdracht 1 */

// Schrijf een functie genaamd getEmailDomain, die een e-mailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam
// is het geen dat na het @ in het adres staat

function getEmailDomain(email) {
    const address = email.split('@').pop().toLowerCase();
    console.log(address);
}
getEmailDomain("n.eeken@novi-education.nl")
getEmailDomain("t.mellink@novi.nl")
getEmailDomain("a.wiersma@outlook.com" + "\n")      // "\n" voor opmaak output //

// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com



/* Opdracht 2 */

// Schrijf een functie genaamd typeOfEmail, die een e-mailadres verwacht. De functie checkt of het e-mailadres een novi
// domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)

function typeOfEmail(email) {
    const address = email.split('@').pop().toLowerCase();
    if (address === "novi-education.nl") {
        console.log("Student");
    }else if (address === "novi.nl" ) {
        console.log("Medewerker");
    }else {
        console.log("Extern");
    }
}
typeOfEmail("n.eeken@novi-education.nl")
typeOfEmail("t.mellink@novi.nl")
typeOfEmail("novi.nlaapjesk@outlook.com")
typeOfEmail("a.wiersma@outlook.com")

console.log("\n");       // "\n" voor opmaak output //

// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"



/* Opdracht 3 */

// Schrijf een functie genaamd checkEmailValidity, die een e-mailadres verwacht en checkt of het e-mailadres valide is.
// De functie returned true of false, afhankelijk van de uitkomst.
// Een e-mailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén "," in voorkomt
// * Er géén "." in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)

function checkEmailValidity(email) {
    const check_for_at = email.includes("@");
    const check_for_comma = email.includes(",");
    const check_for_lastindex = email.endsWith(".");

    if (check_for_at === false ||
        check_for_comma === true ||
        check_for_lastindex === true) {
        console.log(false);
    }else {
        console.log(true);
    }
}
checkEmailValidity("n.eeken@novi.nl")
checkEmailValidity("tessmellink@novi.nl")
checkEmailValidity("n.eekenanovi.nl")
checkEmailValidity("n.eeken@novinl.")
checkEmailValidity("tessmellink@novi,nl")

// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in