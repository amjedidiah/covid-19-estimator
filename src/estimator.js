const computeInfectionsByRequestedTime = (
  periodType,
  timeToElapse,
  currentlyInfected
) => {
  const days = (type) => {
    switch (type) {
      case 'days':
        return Number(timeToElapse);
      case 'weeks':
        return Number(timeToElapse) * 7;
      default:
        return Number(timeToElapse) * 30;
    }
  };

  const factor = Math.round(days / 3);

  const multiplier = 2 ** factor;

  return currentlyInfected * multiplier;
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
