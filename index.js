// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers,name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  console.log(findMatching(drivers,'Bobby'))


  function fuzzyMatch(drivers, letters)
  {

    return drivers.filter(driver => driver.startsWith(letters));
  }
  console.log(fuzzyMatch(drivers,"sa"))


  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}
