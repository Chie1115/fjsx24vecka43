console.log("Hej Torsdag!");

// // Ämnen: switch

// // Syntax för switch:
// let expression = "Hej";

// switch (expression) {
//   case "Hej":
//     // Kod som köras
//     console.log("Hej: ", expression);
//     break;
//   case "Hej då!":
//     // En annan Kod som köras
//     console.log("Hej då!", expression);
//     break;

//   default:
//     // En tredje alternativ Kod som köras
//     console.log("Wrong expression", expression);
//     break;
// }

// ----------------------------------------
// Exempel 1: Veckodagar

// let daysNumber = 7;
// let daysNumber = new Date().getDay();
// let dayName;

// console.log("daysNumber: ", daysNumber);

// switch (daysNumber) {
//   case 1:
//     dayName = "Måndag";
//     break;
//   case 2:
//     dayName = "Tisdag";
//     break;
//   case 3:
//     dayName = "Onsdag";
//     break;
//   case 4:
//     dayName = "Torsdag";
//     break;
//   case 5:
//     dayName = "Fredag";
//     break;
//   case 6:
//     dayName = "Lördag";
//     break;
//   case 0:
//     dayName = "Söndag";
//     break;

//   default:
//     dayName = "Okänd dag";
//     break;
// }

// console.log("Idag är det: ", dayName);

// ----------------------------------------
// Exempel 2: Enkel Meny

// let choice = prompt(
//   "Välj ett av dessa alternativ: 1: Säg buuu!, 2: Sccreaam!!!, 3: I dont want this anymore!"
// );

// switch (choice) {
//   case "1":
//     console.log("Säg buuu!");
//     break;
//   case "2":
//     console.log("Sccreaam!!!");
//     break;
//   case "3":
//     console.log("I dont want this anymore!");
//     break;

//   default:
//     console.log("Ogiltig inmatning, försök igen.");
//     break;
// }

// ----------------------------------------


// //Övning 1: Månadskonverterare (Lätt)
// let monthNumber = parseInt(prompt("Enter a number between 1 and 12:"));
// let monthName;

// switch (monthNumber) {
//     case 1:
//         monthName = "January";
//         break;
//     case 2:
//         monthName = "February";
//         break;
//     case 3:
//         monthName = "March";
//         break;
//     case 4:
//         monthName = "April";
//         break;
//     case 5:
//         monthName = "May";
//         break;
//     case 6:
//         monthName = "June";
//         break;
//     case 7:
//         monthName = "July";
//         break;
//     case 8:
//         monthName = "August";
//         break;
//     case 9:
//         monthName = "September";
//         break;
//     case 10:
//         monthName = "October";
//         break;
//     case 11:
//         monthName = "November";
//         break;
//     case 12:
//         monthName = "December";
//         break;
//     default:
//         monthName = "Invalid month!";
// }

// alert("The month is: " + monthName);



//Övning 2: Trafiksignalssimulator (Lätt) 交通信号シミュレーター
// let trafficColor = prompt("Enter a color of the traffic light (red, yellow, green):").toLowerCase(); //ユーザーから色を取得し小文字に変換
// let instruction;

// switch (trafficColor) {
//     case "red":
//         instruction = "Stop";
//         break;
//     case "yellow":
//         instruction = "Prepare to stop";
//         break;
//     case "green":
//         instruction = "Go";
//         break;
//     default:
//         instruction = "Invalid color!";
// }

// alert(instruction);


//Övning 3: Enkel Meny för Enhetskonvertering (Medel) 簡易単位換算メニュー
// let menuChoice = parseInt(prompt("Choose a conversion:\n1: Celsius to Fahrenheit\n2: Kilometers to Miles\n3: Kilograms to Pounds"));
// let value, result;

// switch (menuChoice) {
//     case 1:
//         value = parseFloat(prompt("Enter value in Celsius:"));
//         result = value * 9 / 5 + 32; //°C to °F 
//         alert(`${value} °C is ${result} °F`);
//         break;
//     case 2:
//         value = parseFloat(prompt("Enter value in Kilometers:"));
//         result = value * 0.621371; // km to miles
//         alert(`${value} Kilometers is ${result} Miles`);
//         break;
//     case 3:
//         value = parseFloat(prompt("Enter value in Kilograms:"));
//         result = value * 2.20462; //kg to pounds
//         alert(`${value} Kilograms is ${result} Pounds`);
//         break;
//     default:
//         alert("Invalid choice!");
// }

//Övning 4: Poäng till Betyg (Medel) 成績評価点
// let points = parseInt(prompt("Enter your points (0-100):"));
// let grade;

// switch (true) {
//     case points >= 90:
//         grade = "A";
//         break;
//     case points >= 80:
//         grade = "B";
//         break;
//     case points >= 70:
//         grade = "C";
//         break;
//     case points >= 60:
//         grade = "D";
//         break;
//     case points < 60 && points >= 0:
//         grade = "F";
//         break;
//     default:
//         grade = "Invalid points!";
// }

// alert("Your grade is: " + grade);


// //Övning 5: Enkel Bankomat (Svår) 単純な ATM
// let balance = 1000; // 初期残高の設定
// let exit = false;  //終了フラグ

// while (!exit) {  // ユーザーが終了を選択するまでループ
//     let menuChoice = parseInt(prompt("Choose an option:\n1: Check balance\n2: Withdraw money\n3: Deposit money\n4: Exit"));
    
//     switch (menuChoice) {
//         case 1:
//             alert("Your balance is: " + balance + " currency units"); // 残高を表示
//             break;
//         case 2:
//             let withdrawal = parseFloat(prompt("Enter amount to withdraw:")); // 引き出す金額を取得
//             if (withdrawal > balance) {          // 残高不足のチェック
//                 alert("Insufficient balance!");  // 残高不足の場合
//             } else {
//                 balance -= withdrawal; // 残高から引き出す
//                 alert("Withdrawal completed. New balance: " + balance + " currency units");  // 結果を表示
//             }
//             break;
//         case 3:
//             let deposit = parseFloat(prompt("Enter amount to deposit:"));   // 預け入れる金額を取得
//             balance += deposit;  // 残高に預け入れる
//             alert("Deposit completed. New balance: " + balance + " currency units"); // 結果を表示
//             break;
//         case 4:
//             exit = true;
//             alert("Thank you for using the ATM!");  // 終了メッセージを表示
//             break;
//         default:
//             alert("Invalid choice!");   // 無効な選択に対するデフォルトのメッセージ
//     }
// }



//Övning 6: Enhetsomvandlare med Meny (Svår)



// //Övning 7: Språkväljare (Lätt)  言語セレクター
//     let choice = prompt("Choose a language:\n1: Swedish\n2: English\n3: Spanish");

//     switch (choice) {
//         case '1':
//             alert("Hej Världen!");
//             break;
//         case '2':
//             alert("Hello World!");
//             break;
//         case '3':
//             alert("¡Hola Mundo!");
//             break;
//         default:
//             alert("Invalid choice.");
//     }


// //Övning 8: Färgväljare (Medel) カラーピッカー
//     let color = prompt("Ange en färg (röd, grön, blå):").toLowerCase(); // 小文字に変換して大文字小文字を区別しない

//     switch (color) {
//         case 'röd':
//             alert("Röd är färgen av eld och blod.");
//             break;
//         case 'grön':
//             alert("Grön symboliserar natur och lugn.");
//             break;
//         case 'blå':
//             alert("Blå representerar havet och himlen.");
//             break;
//         default:
//             alert("Ogiltig färg.");
//     }





