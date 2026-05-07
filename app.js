//  npm run dev

//MOXIYAT

// FRONTENDNI 2 XIL USULDA QURAMIZ
// 1-TRADITIONAL BSSR BIZNING       HOLATDA  EJS ORQALI
// 2- USUL BU ZAMONAVIY SINGLE PAGE APPLICATION USULI (SOON)

// EXPRESS FRAMEWORK Express — bu Node.js uchun yaratilgan eng mashhur web frameworklardan biri bo‘lib, server-side (backend) ilovalarni tez va oson qurish uchun ishlatiladi.

// EJS (Embedded JavaScript) — bu Node.js muhitida ishlatiladigan template engine bo‘lib, HTML ichida JavaScript kod yozishga imkon beradi.

console.log("Start the web server"); // server.js ishlayotganini visual korsatib beradi(easy)
const express = require("express");
const app = express(); // APP  endi meni server obyektim barcha yollar va buyruqlar aynan shu APP  orqali boshqariladi!!!!
 // http bizning core modulimiz
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

// MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

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
   console.log("user entered /create-item");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
  // http==  3SECTIONS 1-START LINE, URL QISMI! 2-HTTP REQUEST HEADER QISMI! 3-BODY QISMI
  // POST OZI BN MALUM BIR MALUMOTNI OLIB KELADI VA DATA BASE GA OSHA MALUMOTNI YOZADI!!!

});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne({
    _id: new mongodb.ObjectId(id)
  },
    function (err, data) {
      res.json({state: "success"});
  })

});


app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );

});



app.get("/author", (req, res) => {
  res.render("author", { user: user });
});




app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "All plans have been deleted" });
    });
  }
})

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans").find().toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      
      res.render("reja", { items: data });
   }
  });

  // GET ---> DATABASE DAN MALUMOTNI OLISH UCHUN GET ISHLATILADI!!!!

});
// app.get("/hello", function (req, res) {
//  res.end(`<h1>HELLO WORLD</h1>`);
// });

// app.get("/gift", function (req, res) {
//   res.end(`<h1> You are on gift page</h1>`);
// });

// const server = http.createServer(app);
// let PORT = 3000; // PORT — bu server ishlaydigan raqamli eshik (port) degani.
// server.listen(PORT, function () {
//   console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`

//   );
// });  
       
module.exports = app;