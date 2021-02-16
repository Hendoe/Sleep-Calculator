function getSleepHours(day) {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 7;
  } else if (day === 'Wednesday') {
    return 9;
  } else if (day === 'Thursday') {
    return 8;
  } else if (day === 'Friday') {
    return 5;
  } else if (day === 'Saturday') {
    return 10;
  } else if (day === 'Sunday') {
    return 12;
  } else {
    return 'Enter a valid day';
  };
};

function getActualSleepHours() {
return (getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'));
};

function getIdealSleepHours() {
  const idealHours = 8;
  return (7 * 8);
};

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  console.log(`You slept for ${actualSleepHours} hours.`);
  console.log(`You meant to sleep for ${idealSleepHours} hours.`);
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    const greaterThan = (actualSleepHours - idealSleepHours);
    console.log(`You got more sleep than you meant to by ${greaterThan} hours.`)
  } else if (actualSleepHours < idealSleepHours) {
    const greaterThan = (idealSleepHours - actualSleepHours);
    console.log(`You got less sleep than you meant to by ${greaterThan} hours.`)
  } else {
    console.log("You broke the Calculator! How'd ya do that?!")
  };
};

calculateSleepDebt();