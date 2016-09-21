"use strict";


var Sequelize = require("sequelize")

var sequelize = new Sequelize('database', '', '', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: 'database.sqlite'
});


var Member = sequelize.define('member', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name' // Will result in an attribute that is lastName when user facing but last_name in the database
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

//let memberModel = require("./model/memberModel");





Member.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
