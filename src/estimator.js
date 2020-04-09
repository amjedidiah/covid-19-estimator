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

const covid19ImpactEstimator = (data) => {
  const { reportedCases, periodType, timeToElapse } = data;

  return {
    data: {},
    impact: {
      currentlyInfected: reportedCases * 10,
      get infectionsByRequestedTime() {
        return computeInfectionsByRequestedTime(
          periodType,
          timeToElapse,
          this.currentlyInfected
        );
      }
    },
    severeImpact: {
      currentlyInfected: reportedCases * 50,
      get infectionsByRequestedTime() {
        return computeInfectionsByRequestedTime(
          periodType,
          timeToElapse,
          this.currentlyInfected
        );
      }
    }
  };
};

export default covid19ImpactEstimator;
