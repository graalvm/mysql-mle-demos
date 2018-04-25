const mysql = require('mysql2');
const tokenize = require('natural/lib/natural/tokenizers/regexp_tokenizer');
const mle = require('mle');

function tokenCount(limit) {
  const connection = getConnection();
  connection.connect();

  console.log("Fetching tweets...");
  var tokenizer = new tokenize.WordTokenizer();
  var query = connection.query('SELECT text from tweets;', function (err, res, flds) {
    if (err) throw err;
    console.log("Counting Tokens...");
    var count = wordCount(res.map(r => tokenizer.tokenize(r.text)));
    var orderedCount = orderKeys(count);

    console.log("Inserting...");
    orderedCount.slice(0, limit).forEach(function(token) {
      connection.query('INSERT into token_count SET ?', token);
    });

    console.log("Done.");
    connection.end();
  });
}

function wordCount(xs) {
  var rv = new Object();
  xs.forEach(function(tokens) {
  	tokens.forEach(function(token) {
      if (token in rv) rv[token] += 1;
      else rv[token] = 1;
    });
  });
  return rv;
}

function orderKeys(object) {
  return Object.keys(object)
    .sort((a, b) => object[b] - object[a])
    .map(key => ({token: key, count: object[key]}));
}

function getConnection() {
  return mysql.createConnection({
     host     : 'localhost',
     user     : 'root',
     password : '',
     database : 'demo'
  });
}

if (!mle.enabled()) {
  tokenCount(100);
}
module.exports.token_count = tokenCount;
