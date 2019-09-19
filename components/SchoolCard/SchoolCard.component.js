import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Avatar } from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme } from '../../styles/theme.styles';
import styles from './SchoolCard.component.styles';
import Icon from '../Icon/Icon.component';

const propTypes = {
  schoolName: PropTypes.string,
  schoolType: PropTypes.oneOf(['SD', 'SMP', 'SMA']),
  schoolAvatarUri: PropTypes.string,
  schoolAddress: PropTypes.string,
  schoolKuotaTotal: PropTypes.number,
  schoolKuotaTersisa: PropTypes.number,
  onPress: PropTypes.func,
  schoolData: PropTypes.object
}
const defaultProps = {
  schoolName: 'SDN 1 Menteng',
  schoolType: 'SD',
  schoolAvatarUri: '',
  schoolAddress: 'Jln.  Menteng No. 4, Kec. Menteng',
  schoolKuotaTotal: 30,
  schoolKuotaTersisa: 3,
  onPress: () => {},
  schoolData: {}
}

const SchoolCardM = (props) => {
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
      style={ styles.schoolCardMContainer }
      onPress={ () => props.onPress(props.schoolData) }
    >
      <Avatar
        rounded
        source={{ uri: props.schoolAvatarUri }}
        avatarStyle={{ backgroundColor: schoolColor }}
        size={'medium'}
      />
      <Text
        style={ styles.textSchoolName }
        textBreakStrategy='simple'
      >
        { props.schoolName }
      </Text>
    </TouchableOpacity>
  )
}

SchoolCardM.propTypes = propTypes;
SchoolCardM.defaultProps = defaultProps;


const SchoolCardL = (props) => {
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
      style={ styles.schoolCardLContainer }
      onPress={ () => props.onPress(props.schoolData) }
    >
      <View
        style={{
          width: '100%',
          position: 'absolute',
          top: 10,
          flexDirection: 'row',
          justifyContent: 'flex-end'
        }}
      >
        <Icon
          name='chair'
          type='FontAwesome5'
          size={ 15 }
          color={ theme.COLOR.GRAY }
        />
        <Text
          style={ styles.textKuota }
          textBreakStrategy='simple'
        >
          { props.schoolKuotaTotal }
        </Text>
      </View>
      <Avatar
        rounded
        source={{ uri: props.schoolAvatarUri }}
        avatarStyle={{ backgroundColor: schoolColor }}
        containerStyle={{ marginTop: 10 }}
        size={'medium'}
      />
      <Text
        style={ styles.textSchoolNameL }
        textBreakStrategy='simple'
      >
        { props.schoolName }
      </Text>
      <Text
        style={ styles.textSchoolAddressL }
        textBreakStrategy='simple'
      >
        { props.schoolAddress }
      </Text>
    </TouchableOpacity>
  )
}

SchoolCardL.propTypes = propTypes;
SchoolCardL.defaultProps = defaultProps;

export { 
  SchoolCardM,
  SchoolCardL
}