-- Copyright (c) 2018, 2018, Oracle and/or its affiliates. All rights reserved.
-- DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
--
-- The Universal Permissive License (UPL), Version 1.0
--
-- Subject to the condition set forth below, permission is hereby granted to any
-- person obtaining a copy of this software, associated documentation and/or
-- data (collectively the "Software"), free of charge and under any and all
-- copyright rights in the Software, and any and all patent rights owned or
-- freely licensable by each licensor hereunder covering either (i) the
-- unmodified Software as contributed to or provided by such licensor, or (ii)
-- the Larger Works (as defined below), to deal in both
--
-- (a) the Software, and
--
-- (b) any piece of software and/or hardware listed in the lrgrwrks.txt file if
-- one is included with the Software each a "Larger Work" to which the Software
-- is contributed by such licensors),
--
-- without restriction, including without limitation the rights to copy, create
-- derivative works of, display, perform, and distribute the Software and make,
-- use, sell, offer for sale, import, export, have made, and have sold the
-- Software and the Larger Work(s), and to sublicense the foregoing rights on
-- either these or other terms.
--
-- This license is subject to the following condition:
--
-- The above copyright notice and either this complete permission notice or at a
-- minimum a reference to the UPL must be included in all copies or substantial
-- portions of the Software.
--
-- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
-- IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
-- FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
-- AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
-- LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
-- OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
-- SOFTWARE.

drop function if exists hello_js_world;
drop function if exists levenshtein;
drop function if exists levenshtein_js;
drop function if exists $LIB$validator;
drop function if exists VALIDATOR_ISEMAIL;
drop table if exists emails;
drop function if exists $LIB$tokens;
drop procedure if exists TOKENS_TOKEN_COUNT;
drop table if exists token_count;
drop table if exists tweets;
drop function if exists hello_js;
drop function if exists hello_python;
drop function if exists hello_ruby;

-- This should not get deployed
drop function if exists VALIDATOR_BLACKLIST;
drop function if exists VALIDATOR_EQUALS;
drop function if exists VALIDATOR_ESCAPE;
drop function if exists VALIDATOR_ISAFTER;
drop function if exists VALIDATOR_ISAFTER_2;
drop function if exists VALIDATOR_ISALPHA;
drop function if exists VALIDATOR_ISALPHANUMERIC;
drop function if exists VALIDATOR_ISASCII;
drop function if exists VALIDATOR_ISBASE64;
drop function if exists VALIDATOR_ISBEFORE;
drop function if exists VALIDATOR_ISBEFORE_2;
drop function if exists VALIDATOR_ISBOOLEAN;
drop function if exists VALIDATOR_ISBYTELENGTH;
drop function if exists VALIDATOR_ISBYTELENGTH_3;
drop function if exists VALIDATOR_ISCREDITCARD;
drop function if exists VALIDATOR_ISCURRENCY;
drop function if exists VALIDATOR_ISDATAURI;
drop function if exists VALIDATOR_ISDECIMAL;
drop function if exists VALIDATOR_ISDIVISIBLEBY;
drop function if exists VALIDATOR_ISEMPTY;
drop function if exists VALIDATOR_ISFLOAT;
drop function if exists VALIDATOR_ISFQDN;
drop function if exists VALIDATOR_ISFULLWIDTH;
drop function if exists VALIDATOR_ISHALFWIDTH;
drop function if exists VALIDATOR_ISHEXADECIMAL;
drop function if exists VALIDATOR_ISHEXCOLOR;
drop function if exists VALIDATOR_ISINT;
drop function if exists VALIDATOR_ISIP;
drop function if exists VALIDATOR_ISIP_2;
drop function if exists VALIDATOR_ISISBN;
drop function if exists VALIDATOR_ISISBN_2;
drop function if exists VALIDATOR_ISISIN;
drop function if exists VALIDATOR_ISISO31661ALPHA2;
drop function if exists VALIDATOR_ISISO8601;
drop function if exists VALIDATOR_ISISRC;
drop function if exists VALIDATOR_ISISSN;
drop function if exists VALIDATOR_ISJSON;
drop function if exists VALIDATOR_ISLATLONG;
drop function if exists VALIDATOR_ISLENGTH;
drop function if exists VALIDATOR_ISLENGTH_3;
drop function if exists VALIDATOR_ISLOWERCASE;
drop function if exists VALIDATOR_ISMACADDRESS;
drop function if exists VALIDATOR_ISMD5;
drop function if exists VALIDATOR_ISMIMETYPE;
drop function if exists VALIDATOR_ISMONGOID;
drop function if exists VALIDATOR_ISMULTIBYTE;
drop function if exists VALIDATOR_ISNUMERIC;
drop function if exists VALIDATOR_ISPORT;
drop function if exists VALIDATOR_ISSURROGATEPAIR;
drop function if exists VALIDATOR_ISUPPERCASE;
drop function if exists VALIDATOR_ISURL;
drop function if exists VALIDATOR_ISUUID;
drop function if exists VALIDATOR_ISVARIABLEWIDTH;
drop function if exists VALIDATOR_LTRIM;
drop function if exists VALIDATOR_LTRIM_2;
drop function if exists VALIDATOR_NORMALIZEEMAIL;
drop function if exists VALIDATOR_RTRIM;
drop function if exists VALIDATOR_RTRIM_2;
drop function if exists VALIDATOR_STRIPLOW;
drop function if exists VALIDATOR_STRIPLOW_2;
drop function if exists VALIDATOR_TOBOOLEAN;
drop function if exists VALIDATOR_TOBOOLEAN_2;
drop function if exists VALIDATOR_TOFLOAT;
drop function if exists VALIDATOR_TOINT;
drop function if exists VALIDATOR_TOINT_2;
drop function if exists VALIDATOR_TRIM;
drop function if exists VALIDATOR_TRIM_2;
drop function if exists VALIDATOR_UNESCAPE;
drop function if exists VALIDATOR_WHITELIST;
