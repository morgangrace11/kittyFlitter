const Sequelize = require('sequelize');
const sequelize = new Sequelize('kittyFlitter', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const Events = sequelize.define('events', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    event:{
      type: Sequelize.STRING,
      allowNull: false
    },
    time: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  const User = sequelize.define('users', {
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  })

sequelize.sync();

  module.exports = {
    Events,
    User,
  };
