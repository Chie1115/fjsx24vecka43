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





//Övning 1: Multiplikationstabell (Lätt) 九九
// let tal = Number(prompt("Ange ett tal mellan 1 och 10:"));
// //1から10までの数字をループ
// for (let i = 1; i <= 10; i++) {
//   console.log(`${tal} * ${i} = ${tal * i}`);
// }



//Övning 2: Räkna Ned (Lätt) カウントダウン
// for (let i = 10; i > 0; i--) {
//     console.log(i);
//   }



//Övning 3: Summa av Udda Tal (Medel) 奇数の合計 
// let summa = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {    //i % 2 !== 0 で数値が奇数かどうかを確認
//     // iが奇数であれば、その値を'summa'に加えます。
//     summa += i;
//   }
// }
// //1から100までのすべての奇数の合計を出力
// console.log(`Summan av alla udda tal mellan 1 och 100 är ${summa}.`);



//Övning 4: Enkel Räknare (Medel) 簡単な計算機
// let resultat = 0;
// let fortsätt;
// //複数の計算を可能にするdo-whileループを開始
// do {
// //ユーザーに値を追加（+）するか引く（-）かを尋ねます。
//   let val = prompt("Vill du lägga till (+) eller dra ifrån (-) ett värde? Ange + eller - (eller avsluta):");
//   if (val === "+") {
//     let tillägg = Number(prompt("Ange ett värde att lägga till:"));
//     resultat += tillägg;
//   } else if (val === "-") {
//     let avdrag = Number(prompt("Ange ett värde att dra ifrån:"));
//     resultat -= avdrag;
//   }
// //ユーザーに続行したいかを尋ねます。
//   fortsätt = confirm("Vill du fortsätta?");
// } while (fortsätt);
// console.log(`Slutgiltigt resultat: ${resultat}`);


//Övning 5: Fibonacci-sekvensen (Svår)
//Övning 6: Gissa Talet-spel (Svår)


//Övning 7: Enkel Meny (Medel) シンプル メニュー 1. 日付の表示、2. 時間の表示、3. 終了
// let val;
// do {
//   val = Number(prompt("Välj ett alternativ:\n1. Se datum\n2. Se tid\n3. Avsluta"));
// //ユーザーが日付を表示することを選んだか確認
//   if (val === 1) {
//     console.log(`Datumet är: ${new Date().toLocaleDateString()}`);
// //ユーザーが時間を表示することを選んだか確認
//   } else if (val === 2) {
//     console.log(`Tiden är: ${new Date().toLocaleTimeString()}`);
//   }
// } while (val !== 3); // ユーザーが「終了」を選ぶまでループします。



//Övning 8: Räkna Antalet Vokaler i en Sträng (Svår) 文字列内の母音の数を数える


//Övning 9: Faktorberäkning (Medel) 因数分解
// // ユーザーに正の整数を入力させます
// let n = Number(prompt("Ange ett positivt heltal:"));
// // 階乗を計算するための変数を初期化
// let faktor = 1;
// // 1から'n'までの数字をループ
// for (let i = 1; i <= n; i++) {
//     // ループの中で、iは1からnまでのすべての整数を順番に取ります。
//   faktor *= i;
//   // 'faktor'に現在の'i'を掛け算します。
//   // これにより、'faktor'には1からnまでの数の積が累積されます。
// }
// console.log(`${n}! = ${faktor}`);
// // `${n}!`は階乗を表し、`faktor`には計算された階乗の値が入っています。
// // この行で、ユーザーが入力した数の階乗の結果が表示されます。

/* 例　n=5
i=1 のとき: faktor = 1 * 1 = 1
i=2 のとき: faktor = 1 * 2 = 2
i=3 のとき: faktor = 2 * 3 = 6
i=4 のとき: faktor = 6 * 4 = 24
i=5 のとき: faktor = 24 * 5 = 120
*/

//Övning 10: Palindromkontroll (Svår) 回文チェック