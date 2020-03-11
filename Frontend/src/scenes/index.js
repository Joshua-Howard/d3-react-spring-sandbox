import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import './styles.sass';

import AnimatedPieSVG from './pie';

// import * as actions from '../redux/actions/actions';
// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

const TestData = [
  { date: 0, value: 17 },
  { date: 1, value: 19 },
  { date: 2, value: 1 },
  { date: 3, value: 4 },
  { date: 4, value: 98 }
];

const PieChart = ({}) => {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data, setData] = useState(generateData(0));
  const changeData = () => {
    setData(generateData());
  };

  useEffect(() => {
    setData(generateData());
  }, [!data]);

  //Can use data or TestData Below
  return (
    <div>
      <div>SVG Below</div>

      <div>{JSON.stringify(TestData)}</div>

      <AnimatedPieSVG
        data={TestData}
        width={200}
        height={200}
        innerRadius={60}
        outerRadius={100}
      />
    </div>
  );
};

export default PieChart;
// export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
