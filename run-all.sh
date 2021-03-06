#! /bin/sh
set -e
set -x

if [ "$#" -ne 2 ]; then
    echo "Required two parameters: (1) the MySQL client command and (2) the dbjs command.";
    exit 1
fi

# Set all the executables.
DATABASE=demo
MYSQL=$1
MYSQL_DEMO="$MYSQL --database $DATABASE"
DBJS=$2

# Check if running in the current folder.
if [ ! -f "$PWD/run-all.sh" ]; then
    echo "This script must be run from the root of the repository.";
    exit 1
fi
ROOT_DIR=$PWD

# Seed all
$MYSQL < $ROOT_DIR/seed-data/all.sql

# Demo 0
$MYSQL_DEMO < $ROOT_DIR/0-demo-hello-js/hello-js.sql

# Demo 1
$MYSQL_DEMO < $ROOT_DIR/1-levenshtein-distance/levenshtein.sql
$MYSQL_DEMO < $ROOT_DIR/1-levenshtein-distance/levenshtein_js.sql

# Demo 2
cd $ROOT_DIR/2-email-validation/
npm install
$DBJS deploy -c "localhost/$DATABASE?port=3306" --database=mysql -u root --password= validator.ts
echo "select email from emails where validator_isemail(email) = 1;" | $MYSQL_DEMO

# Demo 3
cd $ROOT_DIR/3-string-tokenization/
npm install
$DBJS deploy -c "localhost/$DATABASE?port=3306" --database=mysql -u root --password=  --webpackConfig webpack.config.js tokens.js
echo "call tokens_token_count(100);" | $MYSQL_DEMO
echo "select * from token_count" | $MYSQL_DEMO

