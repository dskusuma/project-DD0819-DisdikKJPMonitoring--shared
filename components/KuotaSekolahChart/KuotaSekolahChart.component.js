import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { theme } from '../../styles/theme.styles';
import PropTypes from 'prop-types';

const propTypes = {
  kursiTersisa: PropTypes.number,
  kursiTotal: PropTypes.number
}

const defaultProps = {
  kursiTersisa: 30,
  kursiTotal: 300
}

class KuotaSekolahChart extends React.PureComponent {

  render() {
      const {
        kursiTersisa,
        kursiTotal
      } = this.props;

      const data = [
        {
          key: 1,
          value: kursiTotal,
          svg: { fill: theme.COLOR.GRAYCHARTDARK },
          arc: { outerRadius: '110%', cornerRadius: 10,  }
        },
        {
          key: 2,
          value: kursiTersisa,
          svg: { fill: theme.COLOR.GRAYCHARTLIGHT }
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

KuotaSekolahChart.propTypes = propTypes;
KuotaSekolahChart.defaultProps = defaultProps;
export default KuotaSekolahChart