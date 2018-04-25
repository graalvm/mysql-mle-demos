DELIMITER $$
CREATE FUNCTION hello_world_js() RETURNS VARCHAR(255) LANGUAGE JS function() {
  return "Hello, JS World!";
}$$

DELIMITER ;

SELECT hello_world_js() as Greeting;
