/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import './styles.sass';

import AnimatedPie from './animatedPie';

// import * as actions from '../redux/actions/actions';
// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

const TestData = [
  { city: 'Nassau County', value: 17 },
  { city: 'New York County', value: 19 },
  { city: 'Hudson County', value: 1 },
  { city: 'Rockland County', value: 4 },
  { city: 'Westchester County', value: 98 }
];

const TestData2 = [
  { city: 'Nassau County', value: 30 },
  { city: 'New York County', value: 50 },
  { city: 'Hudson County', value: 70 },
  { city: 'Rockland County', value: 40 },
  { city: 'Westchester County', value: 8 }
];

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

  const chartSize = windowDimensions.width / 3;

  return (
    <div>
      <div>SVG Below</div>

      <div>{JSON.stringify(sourceData ? TestData : TestData2)}</div>

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
              data={sourceData ? TestData : TestData2}
              width={chartSize}
              height={chartSize}
              innerRadius={(chartSize / 2) * 0.5}
              outerRadius={chartSize / 2}
            />
          </div>
          <div className="col-6 d-flex justify-content-center">
            <AnimatedPie
              data={sourceData ? TestData : TestData2}
              width={chartSize}
              height={chartSize}
              innerRadius={(chartSize / 2) * 0.5}
              outerRadius={chartSize / 2}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6 d-flex justify-content-center">
            <AnimatedPie
              data={sourceData ? TestData : TestData2}
              width={chartSize}
              height={chartSize}
              innerRadius={(chartSize / 2) * 0.5}
              outerRadius={chartSize / 2}
            />
          </div>
          <div className="col-6 d-flex justify-content-center">
            <AnimatedPie
              data={sourceData ? TestData : TestData2}
              width={chartSize}
              height={chartSize}
              innerRadius={(chartSize / 2) * 0.5}
              outerRadius={chartSize / 2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
// export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
