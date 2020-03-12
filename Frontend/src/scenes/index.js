/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import './styles.sass';

import AnimatedPie from './animatedPie';
import * as testData from './testData';

// import * as actions from '../redux/actions/actions';
// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

const TestData1 = testData.data1;
const TestData2 = testData.data2;

const PieChart = () => {
  const [sourceData, updateSourceData] = useState(true);

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const updateWindowDimensions = () => {
    const dimensionsObject = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    setWindowDimensions(dimensionsObject);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
  }, []);

  const dataFilter = (keySelection, data) => {
    const filteredDataArray = data.reduce((acc, curr) => {
      acc.push({ city: curr.city, value: curr[keySelection] });
      return acc;
    }, []);

    return filteredDataArray;
  };

  const chartSize = windowDimensions.width / 3.3;

  const GoodData1 = dataFilter('good', TestData1);
  const GoodData2 = dataFilter('good', TestData2);

  const GreatData1 = dataFilter('great', TestData1);
  const GreatData2 = dataFilter('great', TestData2);

  const ExcellentData1 = dataFilter('excellent', TestData1);
  const ExcellentData2 = dataFilter('excellent', TestData2);

  const SpectacularData1 = dataFilter('spectacular', TestData1);
  const SpectacularData2 = dataFilter('spectacular', TestData2);

  return (
    <div>
      <div>SVG Below</div>

      <small className>
        {JSON.stringify(sourceData ? GoodData1 : GoodData2)}
      </small>

      <button
        type="button"
        className="w-100 my-3"
        onClick={() => updateSourceData(last => !last)}
      >
        Swap Data
      </button>

      <div className="container-fluid">
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <AnimatedPie
              data={sourceData ? GoodData1 : GoodData2}
              width={chartSize}
              height={chartSize}
              innerRadius={(chartSize / 2) * 0.5}
              outerRadius={chartSize / 2}
              title="Healthy"
            />
          </div>
          <div className="col-6 d-flex justify-content-center">
            <AnimatedPie
              data={sourceData ? GreatData1 : GreatData2}
              width={chartSize}
              height={chartSize}
              innerRadius={(chartSize / 2) * 0.5}
              outerRadius={chartSize / 2}
              title="Healthy"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6 d-flex justify-content-center">
            <AnimatedPie
              data={sourceData ? ExcellentData1 : ExcellentData2}
              width={chartSize}
              height={chartSize}
              innerRadius={(chartSize / 2) * 0.5}
              outerRadius={chartSize / 2}
              title="Healthy"
            />
          </div>
          <div className="col-6 d-flex justify-content-center">
            <AnimatedPie
              data={sourceData ? SpectacularData1 : SpectacularData2}
              width={chartSize}
              height={chartSize}
              innerRadius={(chartSize / 2) * 0.5}
              outerRadius={chartSize / 2}
              title="Healthy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
// export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
