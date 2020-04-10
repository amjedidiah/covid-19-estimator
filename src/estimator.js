import computeInfectionsByRequestedTime from './infections';

const covid19ImpactEstimator = (data) => {
  const {
    reportedCases, periodType, timeToElapse, totalHospitalBeds
  } = data;

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
      },
      get severeCasesByRequestedTime() {
        return 0.15 * this.infectionsByRequestedTime;
      },
      get hospitalBedsByRequestedTime() {
        return Math.floor(totalHospitalBeds * 0.35 - this.severeCasesByRequestedTime);
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
      },
      get severeCasesByRequestedTime() {
        return 0.15 * this.infectionsByRequestedTime;
      },
      get hospitalBedsByRequestedTime() {
        return Math.floor(totalHospitalBeds * 0.35 - this.severeCasesByRequestedTime);
      }
    }
  };
};

export default covid19ImpactEstimator;
