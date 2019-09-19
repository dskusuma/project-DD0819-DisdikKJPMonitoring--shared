import React from 'react';
import { storiesOf } from '@storybook/react-native';
import KehadiranChart from './KehadiranChart.component';

storiesOf('Chart Kehadiran', module)
  .add('default', () => <KehadiranChart />)