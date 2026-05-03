//  npm run train

// TASK D

// Ikkita parametra ega function tuzing, va functioning berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq mos kelsa true qiymat qaytarsin.

// Masalan: checkContent("mitgroup", "gmtiprou") return true



let salom = "mitgroup";
let salom2 = "gmtiprou";

function checkContent(a, b) {
    let salom = a.split("").sort().join("");

    let salom2 = b.split("").sort().join("");
    if (salom === salom2) {
        return true;
    } else {
        return false;
    }
        
 
}

let yakun = checkContent("mitgroup", "gmtiprou");
console.log(yakun);




















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
// const moment = require("moment");

// class BehruzShop {

//     constructor ( non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
    
//     }

//     qoldiq() {
//             const time = moment().format("HH:mm");
//         console.log(`Hozir ${time} da: ${this.non} ta non ${this.lagmon} ta lagmon  va ${this.cola} blok cola mavjud `)
//     }


//     sotish(product, amount) {
//             const time = moment().format("HH:mm");
//         if (product === "non") {
//         this.non -= amount;
//         } else if(product === "lagmon") {
//        this.lagmon -= amount;
//         } else if (product === "cola") {
//             this.cola -= amount;
//         } else {
//             return console.log("Uzur bunday mahsulot mavjud emas");
//     }
// console.log(`Hozir ${time}da ${product}dan ${amount}ta sotildi`);

//     }

   
//     qabul(product, amount) {
//         const time = moment().format("HH:mm");

//         if (product === "non") {
//             this.non += amount;
//         } else if (product === "lagmon") {
//             this.lagmon += amount;
//         } else if (product === "cola") {
//             this.cola += amount;
//         } else {
//             return console.log("Dokonimizda bunday mahsulot yoq!");
//         }

//         console.log(`Hozir ${time}da ${product}dan ${amount}ta qabul qilindi`);
//     }
// }


//    const behruzShop = new BehruzShop(4, 5, 2);

// behruzShop.qoldiq();
// behruzShop.sotish("non", 3);
// behruzShop.qabul("cola", 4);
// behruzShop.qoldiq(); 









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
