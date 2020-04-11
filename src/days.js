const timeInDays = (timeToElapse, periodType) => {
  return {
    days: timeToElapse,
    weeks: timeToElapse * 7,
    months: timeToElapse * 30
  }[periodType];
};

export default timeInDays;
