const computeDollarsInFlight = (
  periodType,
  timeToElapse,
  infectionsByRequestedTime,
  avgDailyIncomePopulation,
  avgDailyIncomeInUSD
) => {
  const days = {
    days: timeToElapse,
    weeks: timeToElapse * 7,
    months: timeToElapse * 30
  }[periodType];

  return (
    Math.floor(infectionsByRequestedTime
    * avgDailyIncomePopulation
    * avgDailyIncomeInUSD
    * days)
  );
};

export default computeDollarsInFlight;
