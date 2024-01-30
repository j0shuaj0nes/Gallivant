const sequelize = require('../config/connection');
const { User, City} = require('../models');

const userData = require('./userData.json');
const cityData = require('./cityData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const city = await City.bulkCreate(cityData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);

};

seedDatabase();
