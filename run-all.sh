#! /bin/sh -x
if [ "$#" -ne 2 ]; then
    echo "Required two parameters: (1) the MySQL client command and (2) the dbjs command.";
    exit 1
fi

# Set all the executables.
MYSQL=$1
DBJS=$2

# Check if running in the current folder.
if [ ! -f "$PWD/run-all.sh" ]; then
    echo "This script must be run from the root of the repository.";
    exit 1
fi
ROOT_DIR=$PWD

# Drop all
$MYSQL < $ROOT_DIR/seed-data/drop.sql

# Demo 0
$MYSQL < $ROOT_DIR/0-demo-hello-js/hello-js.sql

# Demo 1
$MYSQL < $ROOT_DIR/seed-data/emails.sql
$MYSQL < $ROOT_DIR/1-levenshtein-distance/levenshtein.sql
$MYSQL < $ROOT_DIR/1-levenshtein-distance/levenshtein_js.sql

# Demo 2
cd $ROOT_DIR/2-email-validation/
$DBJS deploy -c "localhost/demo?port=3306" --database=mysql -u root --password= validator
echo "select email from emails where validator_isemail(email) = 1;" | $MYSQL
cd $ROOT_DIR

# Demo 3
$MYSQL < $ROOT_DIR/seed-data/tweets.sql
$MYSQL < $ROOT_DIR/seed-data/tokens.sql

cd $ROOT_DIR/3-string-tokenization/
$DBJS deploy  -c "localhost/demo?port=3306" --database=mysql -u root --password=  --webpackConfig webpack.config.js tokens.js
echo "call tokens_token_count(100);" | $MYSQL
cd $ROOT_DIR
