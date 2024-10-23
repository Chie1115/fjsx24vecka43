console.log("Hej Onsdag!");

// Ämnen: For-loop, while, do/while

// Syntax för for-loops:

// for(initialisering; vilkor; uppdatering) {
//     kod som upprepas
// }

// Kolla upp varför i-- inte är samma som i -1

// for (let i = 10; i >= 1; i--) {
//   console.log("index: ", i);
//   for (let j = 0; j <= 5; j++) {
//     console.log("j: ", j);
//   }

// }

// let summa = 0;

// for (let i = 0; i <= 100; i++) {
//   summa += i;
//   //   console.log("i", i);
//   //   console.log("summa", summa);
// }

// console.log("Slutresultatet efter hela for loppen är summa: ", summa);

// -------------------------------------------

// while do/while

// Syntax:

// while (vilkor) {
//     Kod som upprepas så länge vilkoret är sant
// }

// Exempel: Gissa talet:
// skapa ett program där user ska gissa ett förutbestämt tal

// let secretRandomNumber = Math.random() * 10;
// console.log(secretRandomNumber, "först");
// secretRandomNumber = Math.ceil(secretRandomNumber);
// console.log(secretRandomNumber);

// let guess = Number(prompt("Gissa ett tal mellan 1 - 10: "));

// while (guess !== secretRandomNumber) {
//   guess = Number(
//     prompt("Fel gissat!Försök igen, ge mig en gissning mellan 1 - 10: ")
//   );
// }

// console.log(
//   "Grattis du gissade på rätt siffra",
//   "secretRandomNumber: ",
//   secretRandomNumber,
//   "guess: ",
//   guess
// );

// Do while loopar

// Syntax:

// do {
//     // Kod som körs MINST en gång
// } while ("condition/villkor");

// Skapa en enkel meny som upprepas till användaren väljer att avsluta

// let choice;

// do {
//   choice = Number(
//     prompt(
//       "Välj ett av dessa alternativ: 1: Säg hej. 2: Säg Hej då. 3: Avsluta"
//     )
//   );

//   if (choice === 1) {
//     console.log("hej");
//   } else if (choice === 2) {
//     console.log("Hej då");
//   } else if (choice === 3) {
//     console.log("Programmet avslutas");
//   } else {
//     console.log("Ogiltigt val, försök igen, välj en siffra mellan 1-3.");
//   }
// } while (choice !== 3);

//