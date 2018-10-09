## String Tokenization and Token Frequency in the Database

In this demo we tokenize tweets that are stored in the database and check the word
frequency.

First install all the required packages:
```
npm install
```

Then to execute the tokenization and frequency on the client execute:
```
nodejs tokens.js
```

To deploy the same function to the database:
```
dbjs deploy  -c "localhost/demo?port=3306" --database=mysql -u root --password=  --webpackConfig webpack.config.js tokens.js
```

In the client simply invoke:
```
call TOKENS_TOKEN_COUNT();
```

Observe the difference in the query execution time and the execution time in the client.
