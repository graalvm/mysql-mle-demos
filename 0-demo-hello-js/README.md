## Running the "Hello, JS World!" Demo

Start the mysql client and in the shell type:
```
DELIMITER $$
CREATE FUNCTION hello_js_world() RETURNS VARCHAR(255) LANGUAGE JS function() {
  return "Hello, JS World!";
}$$
DELIMITER ;

select ROUTINE_NAME, EXTERNAL_LANGUAGE from information_schema.routines where ROUTINE_SCHEMA="demo";

SELECT hello_js_world() as Greeting;
```
The result should look like:
```
mysql-mle> DELIMITER $$
mysql-mle> CREATE FUNCTION hello_js_world() RETURNS VARCHAR(255) LANGUAGE JS function() {
    ->   return "Hello, JS World!";
    -> }$$
Query OK, 0 rows affected (0.05 sec)

mysql-mle> DELIMITER ;
mysql-mle> 
mysql-mle> select ROUTINE_NAME, EXTERNAL_LANGUAGE from information_schema.routines where ROUTINE_SCHEMA="demo";
+----------------+-------------------+
| ROUTINE_NAME   | EXTERNAL_LANGUAGE |
+----------------+-------------------+
| hello_js_world | JS                |
+----------------+-------------------+
1 row in set (0.00 sec)

mysql-mle> 
mysql-mle> SELECT hello_js_world() as Greeting;
+------------------+
| Greeting         |
+------------------+
| Hello, JS World! |
+------------------+
1 row in set (0.00 sec)
```

Alternatively just source the file `hello-js.sql` from this folder.
