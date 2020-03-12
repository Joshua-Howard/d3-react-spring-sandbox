import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import './styles.sass';

import AnimatedPie from './animatedPie';

// import * as actions from '../redux/actions/actions';
// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

const TestData = [
  { city: 0, value: 17 },
  { city: 1, value: 19 },
  { city: 2, value: 1 },
  { city: 3, value: 4 },
  { city: 4, value: 98 }
];

const TestData2 = [
  { city: 0, value: 30 },
  { city: 1, value: 50 },
  { city: 2, value: 70 },
  { city: 3, value: 40 },
  { city: 4, value: 8 }
];

const PieChart = ({}) => {
  const [sourceData, updateSourceData] = useState(false);

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

  let chartSize = windowDimensions.width / 3;

  return (
    <div>
      <div>SVG Below</div>

      <div>{JSON.stringify(sourceData ? TestData : TestData2)}</div>

      <button
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
