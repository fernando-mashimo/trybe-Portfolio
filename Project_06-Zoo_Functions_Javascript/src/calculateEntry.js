const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { adult, child, senior };
};

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const { adult, child, senior } = countEntrants(entrants);
  return adult * prices.adult + child * prices.child + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
