// Questo foglio è collegato tramite il tag <script> nell'html tramite anche l'attributo src nel quale inseriamo il percorso per raggiungerlo

// Questa modalità è ottima per tenere separate le responsabilità oltre a poter essere riutilizzato in più pagine
// E' possibile caricare più file JS in uno stesso HTML

// questo log produce una direttiva di output nella console del browser
console.log("SONO UN TESTO DI UN FILE ESTERNO");

// un alert produce la creazione di un pop-up BLOCCANTE nella pagina. Solo dopo averlo chiuso il motore di JS continuerà
// l'esecuzione delle successive righe di codice
// window.alert("sono un avviso bloccante");
// sintassi più moderna
// alert("sono un avviso bloccante");

// console.log("Mi vedrai solo dopo aver chiuso l'alert");

// chiedere all'utente un dato, sempre in maniera bloccante, che potremmo utilizzare (meglio usare un form oggigiorno)
// window.prompt()
// console.log(prompt("scrivi il tuo nome"));

// chiedere una conferma, sempre in maniera bloccante, da poter utilizzare (in futuro) per scegliere se andare in direzione A o in direzione B
// window.confirm()
// console.log(confirm("sei sicuro di voler procedere?"));

// La professione dello sviluppatore software si basa sulla RISOLUZIONE DI PROBLEMI.
// I problemi si risolvono tramite PROCESSI LOGICI, e tramite la creazione di ALGORITMI
// Un algoritmo è una sequenza FINITA di passaggi che portano da un problema alla sua risoluzione; anzi, dato uno stesso problema
// portano allo STESSO risultato.

("Stefano"); // dato creato e eliminato subito dopo

// VARIABILI
// una variabile è un contenitore di valore.
// serve a memorizzare un dato, spesso ricavato da un processo intermedio, in modo da poterlo utilizzare in succesive righe di codice

// per creare una variabile utilizzeremo la keyword let, seguita dal nome che vogliamo dare al contenitore
// seguito dall'operatore di assegnazione = e poi il valore
let myVariable;
// questa istruzione ha generato una VARIABILE o contenitore VUOTO e l'abbiamo chiamato myVariable
// nasce senza un valore, ma potremmo assegnarglielo successivamente

console.log(myVariable); // undefined
// possiamo assegnare un valore ad una qualsiasi variabile dichiarata con let anche successivamente alla sua definizione
// useremo l'operatore di assegnazione =
myVariable = "flour"; // abbiamo scritto un valore
console.log(myVariable); // "flour"

myVariable = "eggs"; // abbiamo scritto un valore
console.log(myVariable); // "eggs"

// qui creiamo una serie di varibili che inizializzeranno già il loro valore interno
let anotherVar = true;
console.log(anotherVar);

let myNumber = 100;
console.log(myNumber);

let fakeNumb = "100";
console.log(fakeNumb);

let anySum = 5 + 10;
console.log(anySum);

let varDiv = myNumber / 2;

console.log("_________________________");

let impossibleDifference = myVariable - 20; // "eggs" - 20 ==> NaN - valore di tipo numerico che rappresenta un risultato di un'operazione impossibile
console.log("impossible Difference:", impossibleDifference);

const convertAndSubtract = fakeNumb - 10; // "100" - 10 ==> 100 - 10 ==> 90
console.log("converts and Subtracts: ", convertAndSubtract);

// l'operatore + si usa sia per operazione matematiche, sia per manipolazione di stringhe (concatenazione)
const sumStringAndNum = 30 + fakeNumb; // 30100
console.log("sums a string with a num", sumStringAndNum);

// TIPI DI VALORI PRIMITIVI

// string --> "flour", "Stefano", "frase di senso compiuto separata da spazi", " "
// number --> 5, 10, 55, 0, 0.15, -5000, NaN
// boolean --> true, false
// undefined --> assenza di valore generica (tipicamente assegnato di default ad una variabile o contenitore vuoto)
// null --> indica l'assenza di valore intenzionale (tipicamente assegnato dallo sviluppatore)

// TIPI DI DATI STRUTTURALI
// Array --> liste di valori
// Object --> modelli di entità più complesse
// Function --> pacchetti di istruzioni ripetibili

// come chiedere a JavaScript di mostrarci l'effettivo TIPO del dato contenuto in una variabile ==> typeof
console.log("Il tipo reale di fakeNumb è:", typeof fakeNumb);
console.log("Il tipo reale di myNumber è:", typeof myNumber);

// CONCATENAZIONE DI STRINGHE (+) - unire due o più stringhe in una unica risultante

let word1 = "Ciao";
let word2 = "Bellissimi";
let word3 = "Epicoders";

let combinedWords = word1 + " " + word2 + " " + word3 + "!";
console.log(combinedWords);
// una stringa speciale formata da backticks ` --> alt + 96
// la stringa template mi permette di valutare valori dinamici dentro a ${} e riconosce i ritorni di linea (accapo)
let combinedWordsTemplate = `${word1} ${word2} ${word3}!`;
console.log(combinedWordsTemplate);

// COSTANTI

const EPICODE_URL = "https:///www.epicode.com";
const PI = 3.14;

// EPICODE_URL = "epicode.com"; // ❌ una costante NON PUO' essere rieassegnata
// PI = 50; // ❌ una costante NON PUO' essere rieassegnata

combinedWords = "altra parola"; // ✅ posso riassegnare una variabile a posteriori
// let combinedWords = "nuova" + " " + "parola"; // ❌ non posso RIDEFINIRE una variabile esistente, la posso solo modificare (senza l'uso di let)

// OPERATORI
// =    --> operatore di assegnazione

// ALGEBRICI
// +    --> sia operatore aritmetico per somma che concatenazione tra stringhe
// -    --> operatore aritmetico per sottrazione
// *    --> operatore aritmetico per moltiplicazione
// /    --> operatore aritmetico per divisione
// %    --> operatore modulo, ritorna il resto di una divisione

console.log(7 % 3); // 1
console.log(18 % 2); // 0, questa modalità può essere molto utile per scoprire se un numero (anche derivante da una variabile) è pari o dispari

// UGUAGLIANZA
// ==   --> uguaglianza (debole)
// ===  --> uguaglianza (stretta) ✅
// !=   --> disuguaglianza (debole)
// !==  --> disuguaglianza (stretta) ✅

console.log("18 è uguale a '18'?", 18 == "18"); // ❌
console.log("18 è strettamente uguale a '18'?", 18 === "18"); // ✅ più consigliato

console.log("5 è diverso da '5'", 5 != "5");
console.log("5 è strettamente diverso da '5'", 5 !== "5");

console.log("nomi diversi", "stefano" !== "mario");

console.log("la parola contenuta nella variabile è 'ciao'", word1 === "ciao"); // false
console.log("la parola contenuta nella variabile è 'Ciao'", word1 === "Ciao"); // true

// COMPARAZIONE
// >    --> maggiore
// >=   --> maggiore o uguale
// <    --> minore
// <=   --> minore o uguale

console.log("8 è minore di 10", 8 < 10);
console.log("8 è minore o uguale di 8", 8 <= 8);
console.log("1 maggiore di 0", 1 > 0);

// LOGICI
// && --> tutte le condizioni devono valutarsi a true perché l'operatore restituisca true
// || --> basta una condizione true per ottenere true, tutte devono essere false perché restituisca false
// ! --> inverte il risultato, es. !true ==> false

const name = "Stefano";
const height = 179;
const eyeColor = "green";
const age = 19;

console.log(name === "Stefano" && height > 160 && eyeColor === "green" && age >= 18);
//                  true      &&       true   &&          true        &&     true  ==>  true

console.log(eyeColor === "blue-gray" || eyeColor === "blue" || eyeColor === "green");
//                      false        ||          false      ||          true        ==>  true

console.log(name === "Stefano" && height > 160 && (eyeColor === "blue-gray" || eyeColor === "blue" || eyeColor === "green") && age >= 18);
//                                                 in questo caso si valuta prima la condizione tra parentesi, ed il risultato verrà inserito nel resto della comparativa con &&
//                  true       &&      true    && (           false         ||          false      ||           true      ) &&     true

// quindi:
//                  true       &&      true    &&  ( true )                                                                 &&     true     ==> true

// NOR
console.log("il colore non è tra quelli esclusi", !(eyeColor === "red" || eyeColor === "brown" || eyeColor === "yellow"));
