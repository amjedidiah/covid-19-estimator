import computeInfectionsByRequestedTime from './infections';
import computeDollarsInFlight from './dollars';

const covid19ImpactEstimator = (data) => {
  const {
    reportedCases,
    periodType,
    timeToElapse,
    totalHospitalBeds
    // region
  } = data;

  // const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = region;

  const obj = {
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
        const val = totalHospitalBeds * 0.35 - this.severeCasesByRequestedTime;
        return val > 0 ? Math.floor(val) : Math.ceil(val);
      },
      get casesForICUByRequestedTime() {
        return Math.floor(0.05 * this.infectionsByRequestedTime);
      },
      get casesForVentilatorsByRequestedTime() {
        return Math.floor(0.02 * this.infectionsByRequestedTime);
      },
      get dollarsInFlight() {
        return computeDollarsInFlight(
          periodType,
          timeToElapse,
          this.infectionsByRequestedTime
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
      },
      get severeCasesByRequestedTime() {
        return 0.15 * this.infectionsByRequestedTime;
      },
      get hospitalBedsByRequestedTime() {
        const val = totalHospitalBeds * 0.35 - this.severeCasesByRequestedTime;
        return val > 0 ? Math.floor(val) : Math.ceil(val);
      },
      get casesForICUByRequestedTime() {
        return Math.floor(0.05 * this.infectionsByRequestedTime);
      },
      get casesForVentilatorsByRequestedTime() {
        return Math.floor(0.02 * this.infectionsByRequestedTime);
      },
      get dollarsInFlight() {
        return computeDollarsInFlight(
          periodType,
          timeToElapse,
          this.infectionsByRequestedTime
        );
      }
    }
  };

  // eslint-disable-next-line no-console
  console.log(
    data,
    obj.data,
    obj.impact.currentlyInfected,
    obj.impact.infectionsByRequestedTime,
    obj.impact.severeCasesByRequestedTime,
    obj.impact.hospitalBedsByRequestedTime,
    obj.impact.casesForICUByRequestedTime,
    obj.impact.casesForVentilatorsByRequestedTime,
    obj.impact.dollarsInFlight,
    obj.severeImpact.currentlyInfected,
    obj.severeImpact.infectionsByRequestedTime,
    obj.severeImpact.severeCasesByRequestedTime,
    obj.severeImpact.hospitalBedsByRequestedTime,
    obj.severeImpact.casesForICUByRequestedTime,
    obj.severeImpact.casesForVentilatorsByRequestedTime,
    obj.severeImpact.dollarsInFlight
  );
  return obj;
};

export default covid19ImpactEstimator;
