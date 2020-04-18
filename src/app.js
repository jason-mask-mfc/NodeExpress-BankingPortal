const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => res.render("index", { title: "Index"}));

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});