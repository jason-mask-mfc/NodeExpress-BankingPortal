const express = require('express');
const router = express.Router();
const { accounts } = require('../data');

router.get("/savings", (req, res) => res.render("account", { title: savings.nickname, account: savings }));
router.get("/checking", (req, res) => res.render("account", { title: checking.nickname, account: checking }));
router.get("/credit", (req, res) => res.render("account", { title: credit.nickname, account: credit }));

module.exports = router;