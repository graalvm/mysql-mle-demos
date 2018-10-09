DELIMITER $$
CREATE FUNCTION hello_js_world() RETURNS VARCHAR(255) LANGUAGE JS [[ function() {
  return "Hello, JS World!";
}]]$$
DELIMITER ;

select ROUTINE_NAME, EXTERNAL_LANGUAGE from information_schema.routines where ROUTINE_SCHEMA="demo";

SELECT hello_js_world() as Greeting;
