## Hello, Polyglot World!

In this example we show how MLE can be used with multiple languages. For this example to work the `libpolyglot.so` has to be built from [GraalVM](www.graalvm.org) and must be placed istead of the library used in MySQL.

Now in the MySQL client we can run
```
DELIMITER $$
CREATE FUNCTION hello_js (str VARCHAR(50)) RETURNS VARCHAR(50) LANGUAGE JS
function(x)
{
return x + " JavaScript,";
}
$$
CREATE FUNCTION hello_ruby (str VARCHAR(50)) RETURNS VARCHAR(50) LANGUAGE RUBY
proc { |a|
 a + " Ruby,"
}
$$
CREATE FUNCTION hello_python (str VARCHAR(50)) RETURNS VARCHAR(50) LANGUAGE PYTHON
def test_func(x):
 return x + " Python,"
test_func
$$
DELIMITER ;
select concat(hello_js(hello_ruby(hello_python("Hello, from"))), " and many future languages!");
```
to get
```
mysql> select concat(hello_js(hello_ruby(hello_python("Hello, from"))), " and future languages!");
+-------------------------------------------------------------------------------------+
| concat(hello_js(hello_ruby(hello_python("Hello, from"))), " and future languages!") |
+-------------------------------------------------------------------------------------+
| Hello, from Python, Ruby, JavaScript, and future languages!                         |
+-------------------------------------------------------------------------------------+
1 row in set (0.00 sec)
``` 
