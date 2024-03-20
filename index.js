// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // handling the special case
  if (time === '0:00') return 'midnight'
  if (time === '12:00') return 'midday';

  const [hourStr, minuteStr] = time.split(':');
  const hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);

  // handling the whole hour
  if (minute === 0) {
    return `${getNumberInWord(hour)} o'clock`
  }

  // handling the past hour
  if (minute <= 30) {
    return `${getNumberInWord(minute)} past ${getNumberInWord(hour)}`
  }

  // handling the to next hour
  if (minute > 30) {
    const remaningMinute = 60 - minute;
    const nextHour = hour + 1;
    return `${getNumberInWord(remaningMinute)} to ${getNumberInWord(nextHour)}`
  }
}

function getNumberInWord(time) {
  const numbersInWord = ['midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
    'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half']
  return numbersInWord[time]
}

module.exports = { convertTimeToWords };