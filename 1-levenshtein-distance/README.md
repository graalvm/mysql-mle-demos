## Computing the Levenshtein Distance in MySQL

First we can try with a SQL version of the Levensthein distance:
```
source 1-levenshtein-distance/levenshtein.sql;
```

With this function we can see who has the most similar email to the MySQL announcements list:
```
select email, levenshtein("announce@lists.mysql.com", email) as distance from emails order by distance limit 3;
```
While this query runs we have time to take a beverage, come back, and do the same with JS:
```
source 1-levenshtein-distance/levenshtein_js.sql;
select email, levenshtein_js("announce@lists.mysql.com", email) as distance from emails order by distance limit 3;
```
This one completes in a couple of seconds. Now we can run the JS query again:
```
select email, levenshtein_js("announce@lists.mysql.com", email) as distance from emails order by distance limit 3;
```

The first JS query finishes in a few seconds with:
```
mysql> select email, levenshtein_js("announce@lists.mysql.com", email) as distance from emails order by distance limit 3;
+-----------------------------+----------+
| email                       | distance |
+-----------------------------+----------+
| cluster@lists.mysql.com     |        7 |
| replication@lists.mysql.com |       11 |
| Antone_Koss@gmail.com       |       12 |
+-----------------------------+----------+
3 rows in set (1.98 sec)
```
The second one returns the same results and finishes about `50%` faster in `1.39 sec`. This is due the the JIT compilation of JavaScript code that was completed during the first execution. Every next run will run at full speed.

At this time, the SQL query should of completed after about `1` minute. Now, you can compare the code of both queries and decide which one you consider nicer.
