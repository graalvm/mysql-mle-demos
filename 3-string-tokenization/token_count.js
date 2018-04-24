const mysql = require('mysql2');
const tokenize = require('natural/lib/natural/tokenizers/regexp_tokenizer');
const mle = require('mle');

function tokenCount() {
  const connection = getConnection();
  connection.connect();

  var tokenizer = new tokenize.WordTokenizer();
  var query = connection.query('SELECT text from tweets;', function (err, res, flds) {
    if (err) throw err;
    var count = wordCount(res.map(r => r.email)
      .reduce((acc, x) => acc.concat(tokenizer.tokenize(x)), []));

    for (var token in count) {
      connection.query(
        'INSERT into token_frequency SET ?',
        {"token": token, "frequency": count[token]},
        function (err, res, flds) {
          if (err) throw err;
        }
      );
    }
    connection.end();
  });
}

function wordCount(xs) {
  return xs.reduce(function(rv, x) {
    if (!(x in rv)) rv[x] = 1;
    else rv[x] += 1;
    return rv;
  }, {});
};

function getConnection() {
  return mysql.createConnection({
     host     : 'localhost',
     user     : 'root',
     password : '',
     database : 'demo'
  });
}

if (!mle.enabled()) {
  tokenCount();
}
module.exports.tokenCount = tokenCount;
