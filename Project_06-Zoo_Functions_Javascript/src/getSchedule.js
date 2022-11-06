const { species, hours } = require('../data/zoo_data');

const days = Object.keys(hours);
const speciesList = species.map((specie) => specie.name);

const animalAvailability = (specieName) => species
  .find((specie) => specie.name === specieName).availability;

const getDayAnimalsNames = (day) => {
  if (day === 'Monday') return 'The zoo will be closed!';
  return species.filter((specie) => specie.availability.includes(day))
    .map((animal) => animal.name);
};

const getDayHours = (day) => {
  if (day === 'Monday') return 'CLOSED';
  return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
};

const dailyExhibitions = () => {
  const dailyScheduleObject = {};
  days.reduce((acc, currentDay) =>
    acc.concat({
      [currentDay]: {
        officeHour: getDayHours(currentDay),
        exhibition: getDayAnimalsNames(currentDay),
      },
    }), [])
    .forEach((element) => Object.assign(dailyScheduleObject, element));

  return dailyScheduleObject;
};

const getSchedule = (scheduleTarget) => {
  if (speciesList.includes(scheduleTarget)) return animalAvailability(scheduleTarget);
  if (days.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: dailyExhibitions()[scheduleTarget],
    };
  }
  return dailyExhibitions();
};

module.exports = getSchedule;
