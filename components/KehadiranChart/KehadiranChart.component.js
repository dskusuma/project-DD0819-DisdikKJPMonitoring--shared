import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import PropTypes from 'prop-types';

const propTypes = {
  dataHadir: PropTypes.number,
  dataAbsen: PropTypes.number,
  dataIzin: PropTypes.number
}
const defaultProps = {
  dataHadir: 30,
  dataAbsen: 3,
  dataIzin: 1
}
class KehadiranChart extends React.PureComponent {

  render() {
    const {
      dataHadir,
      dataAbsen,
      dataIzin
    } = this.props;

    const data = [
      {
        key: 1,
        value: dataHadir,
        svg: { fill: '#2ECC71' },
        arc: { outerRadius: '110%', cornerRadius: 10,  }
      },
      {
        key: 2,
        value: dataAbsen,
        svg: { fill: '#E74C3C' }
      },
      {
        key: 3,
        value: dataIzin,
        svg: { fill: '#F1C40F' }
      },
    ]


    return (
      <PieChart
        style={{ height: 200 }}
        outerRadius={'70%'}
        innerRadius={10}
        data={data}
      />
    )
  }

}

KehadiranChart.propTypes = propTypes;
KehadiranChart.defaultProps = defaultProps;

export default KehadiranChart