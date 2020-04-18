const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

let accountData = fs.readFileSync(path.join(__dirname, "json", "accounts.json"), 'utf8')
let accounts = JSON.parse(accountData);

let userData = fs.readFileSync(path.join(__dirname, "json", "users.json"), 'utf8')
let users = JSON.parse(userData);

let savings = accounts.savings;
let checking = accounts.checking;
let credit = accounts.credit;

app.get("/", (req, res) => res.render("index", { title: "Account Summary", accounts: accounts }));
app.get("/savings", (req, res) => res.render("account", { title: savings.nickname, account: savings }));
app.get("/checking", (req, res) => res.render("account", { title: checking.nickname, account: checking }));
app.get("/credit", (req, res) => res.render("account", { title: credit.nickname, account: credit }));
app.get("/profile", (req, res) => res.render("profile", { title: "Profile", user: users[0] }));

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});