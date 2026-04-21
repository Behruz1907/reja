//  npm run dev

console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const { text } = require("stream/consumers");

// 1: Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code

// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
  // REQ==  3SECTIONS 1-START LINE, URL QISMI! 2-HTTP REQUEST HEADER QISMI! 3-BODY QISMI
  // POST OZI BN MALUM BIR MALUMOTNI OLIB KELADI VA DATA BASE GA OSHA MALUMOTNI YOZADI!!!
  console.log(req);
  res.json({ test: "success" });
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
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
