console.log("Hej Tisdag!");
// Ämnen att täcka:

// 1.1 If-satser med Logiska Operatorer
// Exempel 1: Ålderskontroll med if-sats

// let age = Number(prompt("Ange din ålder:"));

// if (age >= 18) {
//   console.log("Du är myndig");
// } else {
//   console.log("Du är ej myndig");
// }

// ------------------------------------------------
// Exempel 2: Inloggningssystem med logiska operatorer

// let userName = prompt("Ange ditt användarnamn:");
// let password = prompt("Ange ditt lösenord:");

// if (userName === "admin" && password === "hemligt") {
//   console.log("Access granted ", userName);
// } else if (userName === "lärare" && password === "mandus") {
//   console.log("Access granted ", userName);
// } else {
//   console.log("Access denied ");
// }

// ------------------------------------------------
// Exempel 3: Användning av || operatorn

// let day = prompt("Ange vilken dag det är idag:");

// if (day.toLowerCase() === "lördag" || day.toLowerCase() === "söndag") {
//   console.log(`Det är ${day} och helg!`);
// } else {
//   console.log("Det är vardag", day);
// }

// ------------------------------------------------lör

// Exempel 4: Negation med ! operatorn

// let isRaining = false;
// let isSunny = true;
// let havingBoring = true;
// let haveTwoLegs = false;

// if ((!isRaining && !isSunny) || (!haveTwoLegs && havingBoring)) {
//   console.log("Ut och spela fotboll");
// } else {
//   console.log("Stannar inne och läser en bok");
// }

// ------------------------------------------------

// Introducera ternär operatorn som ett kortare sätt att skriva enkla if-else-satser:

// villkor ? uttryckOmSant : uttryckOmFalskt;

// let temperature = Number(prompt("Ange aktuell temperatur:"));

// if else:
// if (temperature > 25) {
//   console.log("Det är varmt ute idag");
// } else {
//   console.log("Det är INTE varmt ute idag");
// }

// ternary operator:

// temperature > 35
//   ? console.log("Det är väldigt varmt ute idag")
//   : temperature > 25
//   ? console.log("Det är varmt")
//   : temperature > 9 && temperature < 21
//   ? console.log("Det är", temperature)
//   : console.log("Det är INTE varmt ute idag");










// Övning: Temperaturbedömning (Lätt)
// let temp = parseFloat(prompt("Ange temperaturen i Celsius:"));

// if (isNaN(temp)) {
//   alert("Vänligen ange ett giltigt nummer.");
// } else if (temp > 30) {
//   alert("Det är väldigt varmt ute.");
// } else if (temp >= 20 && temp <= 30) {
//   alert("Det är varmt ute.");
// } else if (temp >= 10 && temp < 20) {
//   alert("Det är svalt ute.");
// } else {
//   alert("Det är kallt ute.");
// }



//Övning: Betygskonvertering (Medel)
// Prompt the user to enter a numerical score between 0 and 100
// let score = prompt("Please enter a score between 0 and 100:");

//  Convert the entered string to a number
// score = Number(score);

// Variable to hold the letter grade
// let grade;

// If the score is between 90 and 100 (inclusive), assign "A"
// if (score >= 90 && score <= 100) {
//     grade = "A";
// } 
//  If the score is between 80 and 89, assign "B"
// else if (score >= 80 && score < 90) {
//     grade = "B";
// } 
// If the score is between 70 and 79, assign "C"
// else if (score >= 70 && score < 80) {
//     grade = "C";
// } 
// If the score is between 60 and 69, assign "D"
// else if (score >= 60 && score < 70) {
//     grade = "D";
// } 
// If the score is between 0 and 59, assign "F"
// else if (score >= 0 && score < 60) {
//     grade = "F";
// } 
// For any other case (like negative scores or scores above 100), assign "Invalid score"
// else {
//     grade = "Invalid score";
// }

// Display the result in an alert
// alert("Your letter grade is: " + grade);




// Övning: Butiksrabatt (Medel) 店舗割引 (中)
// Prompt the user to enter their customer type: "New" or "Returning"
// let customerType = prompt("Please enter your customer type (New or Returning):");

// Prompt the user to enter the purchase amount
// let purchaseAmount = parseFloat(prompt("Please enter your purchase amount:"));

// Variable to store the discount
// let discount = 0;

// Check the customer type and purchase amount to apply the discount
// if (customerType === "Returning" && purchaseAmount > 500) {
//     discount = 0.15; // 15% discount
// } else if (customerType === "New" && purchaseAmount > 500) {
//     discount = 0.10; // 10% discount
// }

//  Calculate the final price after discount
// let finalPrice = purchaseAmount - (purchaseAmount * discount);

//  Display the final price
// alert("The final price after discount is: " + finalPrice.toFixed(2) + " kr");




// Övning: Trafikljus (Medel) 信号機 (中)
// Prompt the user to enter the traffic light color
// let color = prompt("Please enter the traffic light color (red, yellow, green):");

// //Convert the input to lowercase for case-insensitive comparison
// color = color.toLowerCase();

// // Display the message based on the color
// if (color === "red") {
//     alert("Stop");                 //「赤」には「止まれ」
// } else if (color === "yellow") {
//     alert("Prepare to stop");      //「黄色」の「停止の準備」
// } else if (color === "green") {
//     alert("Go");                   //「緑」には「走る」
// } else {
//     alert("Invalid entry. Please enter red, yellow, or green.");
// }





// //Övning: Matbeställning (Medel)　食べ物の注文 (中)
//   // Create a menu with dishes and their prices メニューを作成
//   const menu = {
//     1: { name: "Curry", price: 800 },
//     2: { name: "Ramen", price: 600 },
//     3: { name: "Sushi", price: 1200 }
// };

// // Prompt the user to select a dish ユーザーに料理を番号で選択させる
// let choice = prompt("Please choose a dish from the menu:\n1. Curry - 800 yen\n2. Ramen - 600 yen\n3. Sushi - 1200 yen\nEnter the number:");

// // Display the selected dish and price based on user choice
// if (choice === "1") {
//     alert("You selected: " + menu[1].name + "\nPrice: " + menu[1].price + " yen");
// } else if (choice === "2") {
//     alert("You selected: " + menu[2].name + "\nPrice: " + menu[2].price + " yen");
// } else if (choice === "3") {
//     alert("You selected: " + menu[3].name + "\nPrice: " + menu[3].price + " yen");
// } else {
//     alert("Invalid choice. Please enter 1, 2, or 3.");
// }




// //Övning: Hastighetskontroll (Medel) スピードコントロール（中）
//     // Prompt the user to enter speed in km/h  ユーザーに速度を km/h 単位で入力
//     let speed = prompt("Please enter your speed in km/h:");

//     // Convert the input to a number. Number関数を使って数値に変換
//     speed = Number(speed);

//     // Check the speed and display the appropriate message
//     if (speed > 120) { //速すぎる場合: 速度が 120 km/h を超える場合
//         alert("You are going too fast!");
//     } else if (speed >= 80 && speed <= 120) { //承認速度の場合: 速度が 80 km/h 以上 120 km/h 以下
//         alert("Approved speed.");
//     } else if (speed < 80) { //遅すぎる場合: 速度が 80 km/h 未満
//         alert("Too slow. Please increase your speed.");
//     } else { //それ以外の場合
//         alert("Invalid input. Please enter a valid speed.");
//     }




// //Övning: Enkel Valutakonverterare (Lätt) 単純な通貨換算 (簡単)
//  //1. Prompt the user to enter an amount in SEK
// let sekAmount = prompt("Please enter an amount in SEK:");

//  //2. Convert the amount to Euros (1 EUR = 10 SEK) 金額をユーロに換算 (1 EUR = 10 SEK)
// let eurAmount = sekAmount / 10;

// //3. Output the result rounded to two decimal places 結果を小数点第2位まで出力
// alert(`The converted amount is €${eurAmount.toFixed(2)}.`);





// //Övning: Filmrekommendation (Medel) 映画の推薦 (中)
// // Prompt the user to enter their age
// let age = prompt("Please enter your age:");

// // Convert the input to a number
// age = Number(age);

// // Recommend a movie based on age
// if (age < 13) {  //13歳以下の場合
//     alert("Recommended movie: Animated Movie");
// } else if (age >= 13 && age <= 17) { //13歳以上17歳以下の場合
//     alert("Recommended movie: Coming-of-Age Movie");
// } else if (age >= 18) { //18歳以上の場合:
//     alert("Recommended movie: Adult Movie");
// } else { //数字以外が入力された場合
//     alert("Invalid input. Please enter a valid age.");
// }




// //Övning: BMI-kalkylator (Medel) BMI 計算ツール (平均)
// // Prompt the user to enter their height in meters   (例　1．75）
// let height = prompt("Please enter your height in meters:");

// // Prompt the user to enter their weight in kilograms
// let weight = prompt("Please enter your weight in kilograms:");

// // Convert the input to numbers
// height = Number(height);
// weight = Number(weight);

// // Calculate BMI     BMIの計算式
// let bmi = weight / (height * height);

// // Determine the health status based on BMI
// let healthMessage;
// if (bmi < 18.5) {　//低体重: BMIが18.5未満の場合
//     healthMessage = "Underweight";
// } else if (bmi >= 18.5 && bmi <= 24.9) {  //標準体重: BMIが18.5以上24.9以下の場合
//     healthMessage = "Normal weight";
// } else if (bmi >= 25 && bmi <= 29.9) {  //太りすぎ: BMIが25以上29.9以下の場合。
//     healthMessage = "Overweight";
// } else {  //肥満: BMIが30以上の場合
//     healthMessage = "Obesity";
// }

// // Display the result
// alert("Your BMI is: " + bmi.toFixed(2) + "\nHealth status: " + healthMessage);





// //Övning 1: Kontrollera Versaler i en Sträng (Lätt) 文字列内の大文字をチェック
// //Be användaren ange ett ord 
// let word = prompt("Ange ett ord:");

//  //Kontrollera om ordet innehåller några versaler 単語に大文字が含まれているかどうかを確認
// if (word !== word.toLowerCase()) {
//   console.log("Ordet innehåller versaler.");
// } else {
//   console.log("Ordet innehåller inga versaler.");
// }



// Övning 2: Jämföra Tal med toFixed (Lätt) toFixed を使用した数値の比較 
//  Be användaren ange ett decimaltal
// let number = parseFloat(prompt("Ange ett decimaltal:"));

//  Avrunda talet till två decimaler och konvertera tillbaka till Number
// let roundedNumber = parseFloat(number.toFixed(2));

//  Kontrollera om det avrundade talet är större än 10.5
// if (roundedNumber > 10.5) {
//   console.log("Talet är större än 10.5.");
// } else {
//   console.log("Talet är mindre än eller lika med 10.5.");
// }



// Övning 3: Kontrollera Egenskap i Objekt (Medel) オブジェクトのプロパティを確認
//  1. Create a person object with properties
// let person = {
//     name: "Chie",
//     age: 36,
//     city: "Linköping"
// };

// 2. Ask the user to input a property to search for
// let propertyToSearch = prompt("Enter a property to search for (e.g., name, age, city):");

// 3. Check if the property exists in the object
// let keys = Object.keys(person); // Get a list of properties

// if (keys.includes(propertyToSearch)) {
//     Property exists, print its value
//     alert(`The property "${propertyToSearch}" has the value "${person[propertyToSearch]}".`);
// } else {
//      Property does not exist
//     alert("The property does not exist.");
// }



// Övning 4: Validera Telefonnummer (Medel) 電話番号を検証する
// 1. Prompt the user for a phone number ユーザーに電話番号の入力を求める
// let phoneNumber = prompt("Please enter a phone number (10 digits):");

//  2. Check if the phone number has exactly 10 characters 電話番号の長さが10文字であることを確認
// if (phoneNumber.length === 10 && !isNaN(phoneNumber)) {
//      3. If both conditions are met  条件を満たす場合
//     alert("The phone number is valid.");
// } else {
//      4. If conditions are not met 条件を満たさない場合
//     alert("The phone number is invalid.");
// }




// Övning 5: Kontrollera Inledande Text (Medel) 冒頭のテキストを確認する
//  1. Prompt the user to enter a sentence
// let userInput = prompt("Please enter a sentence:");

//  2. Extract the first 5 characters using slice() 最初の5文字をslice()で抽出
// let firstFiveCharacters = userInput.slice(0, 5);

// 3. Check if the first 5 characters are "Hello" 最初の5文字が「Hello」の場合を確認
// if (firstFiveCharacters === "Hello") {
//      4. If a greeting is detected 挨拶が検出された場合
//     alert("Greeting detected");
// } else {
//      5. If no greeting is detected 挨拶が検出されなかった場合
//     alert("No greeting detected.");
// }


