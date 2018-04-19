## Email Validation in the Database

In this example we take the [`validator`](https://www.npmjs.com/package/validator) module from `npm` and use it as a stored function in the database. To install the module:
```
npm install
```
Then we use the `dbjs` tool to make stored functions from the functions in the module:
```
dbjs deploy  -c "localhost/test?port=3306" --database=mysql -u root --password= validator.d.ts
```

Now we can find valid emails in the MySQL client:
```
select email from emails where VALIDATOR_ISEMAIL(email) = 1;
```

Again, the first execution of the query takes around `1.5 sec` while the next executions take about `0.5 sec` as the JavaScript code has been Just-in-Time (JIT)compiled.
