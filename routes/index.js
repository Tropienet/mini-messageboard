var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages});
});

router.get('/new', function(req, res, next) {
  res.render('form', );
});

router.post('/new', function(req, res, next) {
  var messageText = req.body.messageText
  var authorName = req.body.authorName
  messages.push({text: messageText, user: authorName, added: new Date()});
  res.redirect('/');
});

module.exports = router;
