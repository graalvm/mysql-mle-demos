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
