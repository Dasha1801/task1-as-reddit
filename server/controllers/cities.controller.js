const data = require("../data/cities");

const findCity = (city) =>
  data.cities.findIndex((el) => el.name.toLowerCase() === city.toLowerCase());

const searchCity = (city) => Promise.resolve(findCity(city));

exports.searchCity = searchCity;

