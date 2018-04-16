## Running the "Hello, JS World!" Demo

Start the mysql client and in the shell type:
```
DELIMITER $$
CREATE FUNCTION hello_js() RETURNS VARCHAR(255) LANGUAGE JS function() {
  return "Hello, JS World!";
}$$
DELIMITER ;

SELECT hello_js() as Greeting;
```
The result should look like:
```
mysql> DELIMITER $$
mysql> CREATE FUNCTION hello_js() RETURNS VARCHAR(255) LANGUAGE JS function() { return "Hello, JS World!"; }$$
Query OK, 0 rows affected (0.08 sec)

mysql> DELIMITER ;
mysql>
mysql> SELECT hello_js() as Greeting;
+------------------+
| Greeting         |
+------------------+
| Hello, JS World! |
+------------------+
1 row in set (0.00 sec)
```

Alternatively just source the file `hello-js.sql` from this folder.
