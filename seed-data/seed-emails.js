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
var faker = require('faker');

function seedEmails(emails, correctEmails, wrongEmails) {
  for (var i = 0; i < wrongEmails; ++i) {
    emails.push(faker.fake("{{name.lastName}}.{{name.firstName}}"));
  }

  for (var i = 0; i < correctEmails; ++i) {
    emails.push(faker.internet.email());
  }
  console.log('create table emails(email varchar(256));');
  for (var email of emails) {
    console.log('insert into emails(email) values ("' + email + '");');
  }
}

var program = require('commander');
program
  .version('0.1.0')
  .usage('[options]')
  .option('-e, --emails <n>', 'Number of real emails', 4000)
  .option('-f, --fake-emails <n>', 'Number of fake emails', 1000)
  .parse(process.argv);

/* Emails for the demo. */
var emails = [];
emails.push('replication@lists.mysql.com')
emails.push('cluster@lists.mysql.com')
emails.push('backup@lists.mysql.com')
emails = emails.slice(0, program.emails)

seedEmails(emails, Math.max(0, (program.emails - emails.length)), program.fakeEmails);
