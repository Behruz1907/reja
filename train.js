//  npm run train

// TASK-C

// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!



// JAVOB:
const moment = require("moment");

class Shop {

    constructor ( non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    
    }

    qoldiq() {
        console.log(`Hozir dokonda ${this.non}, ${this.lagmon} va ${this.cola} mavjud `)
    }




}








// TASK B

// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin

// Masalan: countDigits("ad2a54y79wet0sfgb9")
// Yuqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi



// TASK B - Javob

// let str = "b1d2d54y79Ke6t0sfgb";

// function countDigits(string) {
//     let count = 0;
//      for (let i = 0; i < string.length; i++) {
//          if (string[i] >= '0' && string[i] <= '9') {
//              count++;
//      }
    
      
//      }
//     return count;
    
 
// }
//   console.log(countDigits(str));





























/* IZOHI task-A


Harf sifatida kiritilgan birinchi parametr, 
kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
Funktsiya tuzing

Masalan: countLetter("e", "engineer")
'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
3 sonini qaytaradi
*/



/* JAVOB:*/



// function countLetter(coder, engineer) {
//     let  count = 0;

//     for (let i = 0; i < engineer.length; i++) {
//            if (coder === engineer[i]) {
//         count++;
//     }
    
      
//     }
//     return count;
    
 
// }

// console.log(countLetter("r", "engineer"));







// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling va yoshlarga tajriba va bilimlaringizni ulashing", // 60
// ];











// // CALLBACK FUNCTIONS

// function maslahatBering(a, callback) {
//     if (typeof a !== 'number') callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) cb(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
       

//     }
// }

// console.log("passed here 0");   
// maslahatBering(35, (err, data) => {
//     if (err) console.log('ERROR:', err);
//     console.log('javob:', data);
// });

// console.log("passed here 1");

// event loop---


// callback function------








// ASYNC FUNCTION

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling va yoshlarga tajriba va bilimlaringizni ulashing", // 60
// ];


// async function maslahatBering(a) {
//     if (typeof a !== 'number') throw new Error("insert a number", null);
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];

//     else {
    
 
//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             resolve(list[4]);

//         }, 4000);
           

//     });
        


     
//     }

// }

// // //   CALL VIA then/CATCH
// console.log("passed here 0");   
// maslahatBering(45).then(data => {
//      console.log('javob:', data);
//  }).catch(err => {
//      console.log('ERROR:', err);
//  })
   

//  console.log("passed here 1"); 

// //CALL VIA  async/await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);



    
// }
// run();






        
// ]

// function tellMe(a, b, callback) {
//     if (b === 0) {
//         callback("Mahraj nolga teng emas!", null);
//     } else {
//         callback(null, a % b);
//     }
// }


// const result = tellMe(10, 7, (err, data) => {
//     if (err) {
//         console.log("ERROR:", err)

//     } else {
//         console.log("RESULT:", data)
//         console.log(".......");
//     }



// });
