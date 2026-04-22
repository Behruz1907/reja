//  npm run dev

//MOXIYAT

// FRONTENDNI 2 XIL USULDA QURAMIZ
// 1-TRADITIONAL BSSR BIZNING       HOLATDA  EJS ORQALI
// 2- USUL BU ZAMONAVIY SINGLE PAGE APPLICATION USULI (SOON)

// EXPRESS FRAMEWORK Express — bu Node.js uchun yaratilgan eng mashhur web frameworklardan biri bo‘lib, server-side (backend) ilovalarni tez va oson qurish uchun ishlatiladi.

// EJS (Embedded JavaScript) — bu Node.js muhitida ishlatiladigan template engine bo‘lib, HTML ichida JavaScript kod yozishga imkon beradi.

console.log("Web Serverni boshlash"); // server.js ishlayotganini visual korsatib beradi(easy)
const express = require("express");
const app = express(); // APP  endi meni server obyektim barcha yollar va buyruqlar aynan shu APP  orqali boshqariladi!!!!
const http = require("http"); // http bizning core modulimiz
const { text } = require("stream/consumers");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: Kirish code

app.use(express.static("public")); //stashqaridan kirib  kelayotgan foydalanuvhcuilar malumotlar ochiq , cs, image qoyamiz
app.use(express.json()); // BU KIRIB KELGAN json formatdagi datani object ko'rinishga ogirib beradi (client va web serverlar ortasidagi data json format ko'rinishida)
app.use(express.urlencoded({ extended: true })); // BU KOD BN HTML (TRADITIONAL)FORMDAN YOZILGAN KODLARNI EXPRESS QABUL QIVOLADI

// 2 Session code

// 3 Views code   // BSSR: BACKEND SERVER SITE RENDRING backendda html yasab uni clientga   o'sha viewni yasash uchun ejs dan foydalanamiz
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
  // http==  3SECTIONS 1-START LINE, URL QISMI! 2-HTTP REQUEST HEADER QISMI! 3-BODY QISMI
  // POST OZI BN MALUM BIR MALUMOTNI OLIB KELADI VA DATA BASE GA OSHA MALUMOTNI YOZADI!!!
  console.log(req);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  // GET ---> DATABASE DAN MALUMOTNI OLISH UCHUN GET ISHLATILADI!!!!
  res.render("harid");
});
// app.get("/hello", function (req, res) {
//  res.end(`<h1>HELLO WORLD</h1>`);
// });

// app.get("/gift", function (req, res) {
//   res.end(`<h1> You are on gift page</h1>`);
// });

const server = http.createServer(app);
let PORT = 3000; // PORT — bu server ishlaydigan raqamli eshik (port) degani.
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
