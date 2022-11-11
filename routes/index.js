var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "A woman is a lot like a refrigerator. Six feet tall, 300 pounds…it makes ice. Fat Tony is a cancer on this fair city! He is the cancer and I am the…uh…what cures cancer? Fame was like a drug. But what was even more like a drug were the drugs",
    user: "John Doe",
    added: new Date(),
  },
  {
    text: "Inflammable means flammable? What a country. I've done everything the Bible says — even the stuff that contradicts the other stuff! Marge, it takes two to lie. One to lie and one to listen. And here I am using my own lungs like a sucker.",
    user: "Jane Doe",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.post("/", (req, res) => {
  messages.push({
    text: req.body.newMessage,
    user: req.body.newAuthor,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
