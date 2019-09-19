import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StudentCardL } from './StudentCard.component'

storiesOf('Student Card', module)
  .add('large', () => <StudentCardL />)