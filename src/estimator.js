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
        return Math.round(0.15 * this.infectionsByRequestedTime);
      },
      get hospitalBedsByRequestedTime() {
        return totalHospitalBeds - this.severeCasesByRequestedTime;
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
        return Math.round(0.15 * this.infectionsByRequestedTime);
      },
      get hospitalBedsByRequestedTime() {
        return totalHospitalBeds - this.severeCasesByRequestedTime;
      }
    }
  };
};

export default covid19ImpactEstimator;
