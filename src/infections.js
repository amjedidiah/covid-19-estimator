import timeInDays from './days';

const computeInfectionsByRequestedTime = (
  periodType,
  timeToElapse,
  currentlyInfected
) => {
  const days = timeInDays(timeToElapse, periodType);

  const factor = Math.floor(days / 3);
  const multiplier = 2 ** factor;

  return currentlyInfected * multiplier;
};

export default computeInfectionsByRequestedTime;
