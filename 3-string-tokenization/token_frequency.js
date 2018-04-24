const mysql = require('mysql2');
const tokenize = require('natural/lib/natural/tokenizers/regexp_tokenizer');
const mle = require('mle');

function wordCount(xs) {
  return xs.reduce(function(rv, x) {
    if (!(x in rv))
      rv[x] = 1;
    else
      rv[x] += 1;
    return rv;
  }, {});
};

function tokenFrequency() {
  const connection = mysql.createConnection({
     host     : 'localhost',
     user     : 'root',
     password : '',
     database : 'test',
     multipleStatements: true
  });
  connection.connect();
  var tokenizer = new tokenize.WordTokenizer();
  var query = connection.query('SELECT text from tweets;', function (error, results, fields) {
    if (error) throw error;
    var count = wordCount(results.map(r => r.email)
      .reduce((acc, x) => acc.concat(tokenizer.tokenize(x)), []));

    // count token counts
    for (var token in count) {
      connection.query('INSERT into token_frequency SET ?', {"token": token, "frequency": groupped[token]}, function (error, results, fields) {
        if (error) throw error;
      });
    }
    connection.end();
  });
}

if (!mle.enabled()) {
  tokenFrequency();
}
module.exports.tokenFrequency = tokenFrequency;
