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
  const factor = days / 3;

  return currentlyInfected * 2 ** factor;
};

const covid19ImpactEstimator = (data) => {
  const { reportedCases, periodType, timeToElapse } = data;

  // * * Impact Properties
  const impactCurrentlyInfected = reportedCases * 10;
  const impactInfectionsByRequestedTime = computeInfectionsByRequestedTime(
    periodType,
    timeToElapse,
    impactCurrentlyInfected
  );

  // * * Severe Impact Properties
  const severeCurrentlyInfected = reportedCases * 50;
  const severeInfectionsByRequestedTime = computeInfectionsByRequestedTime(
    periodType,
    timeToElapse,
    severeCurrentlyInfected
  );

  return {
    data: {},
    impact: {
      currentlyInfected: impactCurrentlyInfected,
      infectionsByRequestedTime: impactInfectionsByRequestedTime
    },
    severeImpact: {
      currentlyInfected: severeCurrentlyInfected,
      infectionsByRequestedTime: severeInfectionsByRequestedTime
    }
  };
};

export default covid19ImpactEstimator;
