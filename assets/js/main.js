// ==================== lev1_2: Objects ========================

// Erstelle ein Objekt und speichere es als Variable person
// Deklariere die Eigenschaft name mit dem Wert deines Namens,
// Deklariere die Eigenschaft alter mit dem Wert deines Alters,
// Deklariere die Methode (Funktion) sagNameAlter im Objekt
// Nutze den Befehl alert() im Funktionskörper um name, alter anzuzeigen.
// Gib in der Konsole name und alter aus.
// Rufe die Funktion sagNameAlter aus dem Objekt auf.

let person = {
  name: "Konstantin",
  age: 28,
  sagNameAlter: function () {
    alert(person.name);
    alert(person.age);
  },
};

console.log(person.name);
console.log(person.age);
// person.sagNameAlter();

// ==================== Objekte-Level-1_4 ========================

// Lernziel: Auf Objekte zugreifen
// Verwende den vorgegebenen Code (siehe Code-Snippet)
// Greife auf die Werte "Nala" und "Droopy" in diesem Objekt zu
// Lasse dir einmal alle Hundenamen anzeigen
// Nutze eine Methode, um die Hundenamen zu ändern

let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].names);
console.log(unsereHaustiere[1].names);

unsereHaustiere[0].names = "anderer Hundename";
unsereHaustiere[1].names = "anderer Hundename";
console.log(unsereHaustiere[0].names);
console.log(unsereHaustiere[1].names);

// ==================== Objekte-Level-1_5 ========================

// In dieser Übung lernen wir, wie man auf die Objekt-Inhalte zugreift.
// Verwende den Code aus dem Kommentar.
// Greife auf die Eigenschaften dieses Objekts zu und gib folgende Werte in der Konsole aus:
// Geheimnisse
// Cola
// Hefter

let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

// ==================== Objekte-Level-1_7 ========================

let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

// Lernziel: Zugriff auf Objekte mit Hilfe von forEach()
// Verwende den vorgegebenen Code (siehe Code-Snippet)
// Greife auf die Eigenschaften des Objekts zu und gib folgende Werte mit forEach() im HTML aus:
// Alle "artist"
// Alle "title"
// Alle "medium"

myMusic.forEach((elt) => {
  document.write(`<br>`);
  document.write(`${elt.artist}<br>`);
  document.write(`${elt.title}<br>`);
  document.write(`${elt.medium}<br>`);
});

// Gib alle “release_year” älter als 1975 aus.

myMusic.forEach((elt) => {
  document.write(`<br>`);

  if (elt.release_year > 1975) {
    document.write(`${elt.release_year}<br>`);
  }
});

// ==================== Objekte-Level-1_8 ========================

let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5",
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"],
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5",
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"],
  },
];

// Lernziel: Zugriff auf Objekte mit Hilfe von forEach und/oder map
// Verwende den vorgegebenen Code (siehe Code-Snippet)
// Greife mithilfe von forEach() oder map() auf Eigenschaften dieses Objekts zu.
// Schreibe eine Funktion für das Objekt, die in der Konsole folgendes ausgibt:
// name
// coop
// city
// emails

const conLog = () => {
  studentData.forEach((elt) => {
    console.log(elt.name);
    console.log(elt.coop);
    console.log(elt.address.city);
    console.log(elt.emails.toString());
  });
};

conLog();
