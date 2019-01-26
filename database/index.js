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
    event: Sequelize.STRING
  })

  const EventTimes =sequelize.define('eventTimes', {
    date: Sequelize.DATE,
    eventType: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Events,
        key: 'id'
      }
    }
  })

  // const Pictures = sequelize.define('pictures', {

  // })

sequelize.sync()

  module.exports = {
    EventTimes,
    Events
  };
