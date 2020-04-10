const computeDollarsInFlight = (
  periodType,
  timeToElapse,
  infectionsByRequestedTime
) => {
  const days = {
    days: timeToElapse,
    weeks: timeToElapse * 7,
    months: timeToElapse * 30
  }[periodType];

  // eslint-disable-next-line no-console
  console.log(days);

  return Math.floor(
    infectionsByRequestedTime
      * days
  );
};

export default computeDollarsInFlight;
