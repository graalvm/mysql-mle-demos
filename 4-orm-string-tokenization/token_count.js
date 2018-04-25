const mysql = require("mysql"); 
const mysql2 = require("mysql2");
const Sequelize = require("sequelize");
const mle = require("mle");

// create sequelize instance
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

function token_count() {
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

//function rawQuery(sequelize) {
//  var users = sequelize.query("SELECT text FROM `tweets`", { type: sequelize.QueryTypes.SELECT})
//     .then(users => console.log(JSON.stringify(users)));
//}

if (!mle.enabled()) {
  token_count();
}
module.exports.token_count = token_count;
