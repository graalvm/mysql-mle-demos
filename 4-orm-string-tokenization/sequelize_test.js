// External dependencies
const mysql2 = require("mysql2"); // dbjs does not see it :/
const mysql = require("mysql"); // dbjs does not see it :/
const Sequelize = require("sequelize");
const console = require("console");
const MLE = require("mle");

// Create sequelize instance
const sequelize = new Sequelize("demo", "root", "", {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.info,
  pool:{
    max: 2,
    min: 0,
    idle: 10000,
    handleDisconnects: true
}
});

function sequelizeTest() {
  const Tweet = sequelize.define('tweets', {
    text: {
      type: Sequelize.STRING
    },
  }, {
    timestamps: false,
  });
  Tweet.findAll({ attributes: ["text"] })
    .then(function (tweets) {
        console.log(tweets);
    }).catch(function(err) {
        console.log(err);
    });
}

function rawQuery(sequelize) {
  var users = sequelize.query("SELECT text FROM `tweets`", { type: sequelize.QueryTypes.SELECT})
     .then(users => console.log(JSON.stringify(users)));
}

function setTimezone(mysql2) {
  const connection = mysql2.createConnection({
     host     : 'localhost',
     user     : 'root',
     password : '',
     database : 'test'
  });

  connection.connect();
  connection.query("SET time_zone = '+00:00'", function (error, results, fields) {
     if (error) throw error;
     console.log('Fields are ', JSON.stringify(fields));
     console.log('The result is ', JSON.stringify(results));
  });
  connection.end();
}

function createTableUsers(User) {
  User.sync({force: true}).then(() => {
    return User.create({
      name: 'Vojin'
    });
  });
}

if (!MLE.enabled()) {
  sequelizeTest();
}
module.exports.sequelizeTest = sequelizeTest;
