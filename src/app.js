const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { accounts, users, writeJSON } = require('./data.js');
const accountRoutes = require('./routes/accounts.js');
const servicesRoutes = require('./routes/services.js');

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.get("/", (req, res) => res.render("index", { title: "Account Summary", accounts: accounts }));
app.get("/profile", (req, res) => res.render("profile", { title: "Profile", user: users[0] }));


app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});