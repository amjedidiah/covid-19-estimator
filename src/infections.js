const computeInfectionsByRequestedTime = (
  periodType,
  timeToElapse,
  currentlyInfected
) => {
  const days = {
    days: timeToElapse,
    weeks: timeToElapse * 7,
    months: timeToElapse * 30
  }[periodType];

  const factor = Math.round(days / 3);
  const multiplier = 2 ** factor;

  return currentlyInfected * multiplier;
};

export default computeInfectionsByRequestedTime;
