DELIMITER $$
CREATE FUNCTION hello_js() RETURNS VARCHAR(255) LANGUAGE JS function() {
  return "Hello, JS World!";
}$$

DELIMITER ;

SELECT hello_js() as Greeting;
