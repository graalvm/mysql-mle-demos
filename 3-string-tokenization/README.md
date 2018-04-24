## String Tokenization and Token Frequency in the Database

In this demo we tokenize tweets that are stored in the database and check the word
frequency.

First install all the required packages:
```
npm install
```

Then to execute the tokenization and frequency on the client execute:
```
node token_count.js
```

To deploy the same function to the database:
```
dbjs deploy  -c "localhost/test?port=3306" --database=mysql -u root --browserify-ignore-missing --password= --browserify-ignore-missing --browserify-ignore ./node_modules/cls-bluebird/lib/index.js --browserify-ignore ./node_modules/iconv-lite/lib/index.js token_count.js
```

In the client simply invoke:
```
call TOKEN_FREQUENCY_TOKENFREQUENCY();
```

Observe the difference in the query execution time and the execution time in the client.
