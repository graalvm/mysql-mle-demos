/*
 * Copyright (c) 2018, 2018, Oracle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * The Universal Permissive License (UPL), Version 1.0
 *
 * Subject to the condition set forth below, permission is hereby granted to any
 * person obtaining a copy of this software, associated documentation and/or
 * data (collectively the "Software"), free of charge and under any and all
 * copyright rights in the Software, and any and all patent rights owned or
 * freely licensable by each licensor hereunder covering either (i) the
 * unmodified Software as contributed to or provided by such licensor, or (ii)
 * the Larger Works (as defined below), to deal in both
 *
 * (a) the Software, and
 *
 * (b) any piece of software and/or hardware listed in the lrgrwrks.txt file if
 * one is included with the Software each a "Larger Work" to which the Software
 * is contributed by such licensors),
 *
 * without restriction, including without limitation the rights to copy, create
 * derivative works of, display, perform, and distribute the Software and make,
 * use, sell, offer for sale, import, export, have made, and have sold the
 * Software and the Larger Work(s), and to sublicense the foregoing rights on
 * either these or other terms.
 *
 * This license is subject to the following condition:
 *
 * The above copyright notice and either this complete permission notice or at a
 * minimum a reference to the UPL must be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
    console.log("Counting tokens...");
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
