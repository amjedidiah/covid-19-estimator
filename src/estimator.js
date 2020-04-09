import computeInfectionsByRequestedTime from './infections';

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
