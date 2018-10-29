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
var program = require('commander');
var Twitter = require('twitter-node-client').Twitter;
var oldLog = console.log
var escapeString = function (str) {
  return str.replace(/[\0\n\r\b\t\\'"\x1a]/g, function (s) {
    switch (s) {
      case "\0":
        return "\\0";
      case "\n":
        return "\\n";
      case "\r":
        return "\\r";
      case "\b":
        return "\\b";
      case "\t":
        return "\\t";
      case "\x1a":
        return "\\Z";
      case "'":
        return "''";
      case '"':
        return '""';
      default:
        return "\\" + s;
    }
  });
};

var error = function (err, response, body) {
  console.log('ERROR [%s]', err);
};
var success = function (data) {
  statuses = JSON.parse(data).statuses
  for (var status in statuses) {
      oldLog('insert into tweets values("%s");', escapeString(statuses[status].text));
  }

};

program
  .version('0.1.0')
  .arguments('<consumerKey> <consumerSecret> <accessToken> <accessTokenSecret>')
  .usage('[options] <consumerKey> <consumerSecret> <accessToken> <accessTokenSecret>\n\n' +
    'You can find <consumerKey> <consumerSecret> <accessToken> <accessTokenSecret> in the Twitter Apps dashboard. \n\n' +
    'Note that there is a rate limit: \n' +
    '  https://developer.twitter.com/en/docs/basics/rate-limits')
  .option('-ht, --hash-tag <n>', 'Hash tag to search', 'haiku')
  .option('-n, --number-of-tweets <n>', 'Number of fake emails', 1000)
  .action(function (consumerKey, consumerSecret, accessToken, accessTokenSecret, cmd) {

    var twitter = new Twitter({
      "consumerKey": consumerKey,
      "consumerSecret": consumerSecret,
      "accessToken": accessToken,
      "accessTokenSecret": accessTokenSecret
    });
    oldLog("create table tweets (text varchar(255) DEFAULT NULL);");
    oldLog('create table token_count(token varchar(255), count int);')
    console.log = function() {}
    twitter.getSearch({'q': '#' + cmd.hashTag, 'count': cmd.numberOfTweets}, error, success);

  }).parse(process.argv);
