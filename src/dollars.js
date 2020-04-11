import timeInDays from './days';

const computeDollarsInFlight = (
  periodType,
  timeToElapse,
  infectionsByRequestedTime,
  avgDailyIncomeInUSD,
  avgDailyIncomePopulation
) => {
  const days = timeInDays(timeToElapse, periodType);

  return Math.floor(
    (infectionsByRequestedTime *
      avgDailyIncomePopulation *
      avgDailyIncomeInUSD) /
      days
  );
};

export default computeDollarsInFlight;
