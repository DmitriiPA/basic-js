const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(x) {
  console.debug(x);
  console.debug(x.getMonth());
  if (x.getMonth() == 11 || x.getMonth() < 3) {
    console.log ('winter')
    return 'winter'
  } else if (x.getMonth() < 6) {
    console.log ('autumn')
    return 'autumn' 
  } else if (x.getMonth() < 9) {
    console.log ('summer')
    return 'summer' 
  } else {
    console.log ('spring')
    return 'spring' 
  }
}

module.exports = {
  getSeason
};
