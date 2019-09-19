import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  Avatar
} from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme } from '../../styles/theme.styles';
import styles from './StudentCard.component.styles';
import Icon from '../Icon/Icon.component';

const studentCardLPropTypes = {
  kjpNumber: PropTypes.string,
  studentName: PropTypes.string,
  schoolName: PropTypes.string,
  schoolType: PropTypes.oneOf(['SD', 'SMP', 'SMA']),
  avatarUri: PropTypes.string,
  availableStudent: PropTypes.number,
  totalStudent: PropTypes.number,
  onPress: PropTypes.func,
  studentData: PropTypes.object
}
const studentCardLDefaultProps = {
  kjpNumber: '1234 5678 9101 1123',
  studentName: 'Bernard Robertson',
  schoolName: 'SDN Menteng',
  schoolType: 'SD',
  avatarUri: '',
  availableStudent: 19,
  totalStudent: 20,
  onPress: () => {},
  studentData: {}
}

const StudentCardL = (props) => {
  let schoolColor
  switch (props.schoolType) {
    case 'SD':
      schoolColor = theme.COLOR.RED_SD
      break;

    case 'SMP':
      schoolColor = theme.COLOR.BLUE_SMP
      break;

    case 'SMA':
      schoolColor = theme.COLOR.BLUE_SMA
      break;
  
    default:
      break;
  }
  return (
    <TouchableOpacity 
      style={ styles.container }
      onPress={ () => props.onPress(props.studentData) }
    >
      <View style={ styles.topContentContainer}>
        <View style={ styles.topTextContainer } >
          <Text style={ styles.textKJP }>{ props.kjpNumber }</Text>
          <Text style={ styles.textStudent }>{ props.studentName }</Text>
        </View>
        <View style={ styles.topAvatarContainer }>
          <Avatar
            rounded
            source={{ uri: props.avatarUri }}
            containerStyle={[ 
              styles.avatarContainer,
              { borderColor: schoolColor }
            ]}
            size={'medium'}
          />
        </View>
      </View>
      <View style={ styles.bottomContentContainer }>
        <View style={ styles.schoolNameContainer }>
          <Icon
            type='MaterialCommunityIcons'
            name='square'
            size={20}
            color={ schoolColor }
          />
          <Text style={ styles.textSchoolName }>{ props.schoolName }</Text>
        </View>
        <View style={ styles.availableStudent }>
          <Text style={ styles.textAvailableStudent }>{props.availableStudent} / {props.totalStudent}</Text>
          <Icon
            type='Feather'
            name='user'
            size={20}
            color={ theme.COLOR.GRAY }
          />
        </View>
      </View>
    </TouchableOpacity>
  )
} 

StudentCardL.propTypes = studentCardLPropTypes;
StudentCardL.defaultProps = studentCardLDefaultProps;
export { 
  StudentCardL 
}