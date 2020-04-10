const computeDollarsInFlight = (
  periodType,
  timeToElapse,
  infectionsByRequestedTime,
  avgDailyIncomeInUSD
) => {
  const days = {
    days: timeToElapse,
    weeks: timeToElapse * 7,
    months: timeToElapse * 30
  }[periodType];

  return (
    Math.floor(infectionsByRequestedTime
    * 0
    * avgDailyIncomeInUSD
    * days)
  );
};

export default computeDollarsInFlight;
