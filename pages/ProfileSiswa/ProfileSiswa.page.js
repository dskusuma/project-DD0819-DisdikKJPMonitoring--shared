import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';

import  { HeaderCustom }  from '../../components/Header/Header.component'
import { SchoolCardM } from '../../components/SchoolCard/SchoolCard.component';
import globalStyles, { theme } from '../../styles/theme.styles';
import Icon from '../../components/Icon/Icon.component';
import KehadiranChart from '../../components/KehadiranChart/KehadiranChart.component';
import styles from './ProfileSiswa.page.styles';

const propTypes = {
  schoolName: PropTypes.string,
  schoolType: PropTypes.oneOf(['SD', 'SMP', 'SMA']),
  studentAvatarUri: PropTypes.string,
  studentName: PropTypes.string,
  dataHadir: PropTypes.number,
  dataAbsen: PropTypes.number,
  dataIzin: PropTypes.number
}
const defaultProps = {
  schoolName: 'SDN 1 Menteng',
  schoolType: 'SD',
  studentAvatarUri: '',
  studentName: 'Bernardy Murphy',
  dataHadir: 30,
  dataAbsen: 3,
  dataIzin: 5
}

class ProfileSiswa extends React.Component {

  constructor(props){
    super(props);
  
    this.state = {
      // Error Handling
      hasError: false,
      student: {}
    }
  
    // Function binding
    // this.functionName = this.functionName.bind(this)
  }
  
  //static getDerivedStateFromProps(nextProps, prevState) { 
  //}
  
  componentDidMount() {
    const { navigation } = this.props;
    let studentData;

    if ( navigation != undefined ) {
      studentData = navigation.getParam('student', 'fall');
      this.setState({ student: studentData });
      console.log('studentData', studentData);
    }

    

  }
  // shouldComponentUpdate(nextProps, nextState) {
  
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState){
  
  // }
  componentDidUpdate(prevProps, prevState) {
  
  }
  
  componentWillUnmount() {
  
  }
  
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log(`Error log from getDerivedStateFromError: error`);
    return { hasError: true };
  }
  
  componentDidCatch(error, info) {
    console.log(`Error log from componentDidCatch: error`);
    console.log(info);
  }
  
  // clickHandlers or eventHandlers like onClickSubmit() or onChangeDescription()
  
  // getter methods for render like getSelectReason() or getFooterContent()
  
  // optional render methods like renderNavigation() or renderProfilePicture()
  

  render() {
    if (this.state.hasError) {
      // Fallback UI when Error
      // return 
    }

    
    const {
      student
    } = this.state;
    
    return (
      <View
        style={{ 
          height: '100%',
          backgroundColor: theme.COLOR.COMPONENT.BACKGROUND
        }}
      >
        <HeaderCustom 
          props={this.props}
          avatarRight={true}
          title={ student.name }
          subtitle={ student.schoolName }
          backButtonColor={ theme.COLOR.PURE_WHITE }
          titleStyle={{ color: theme.COLOR.PURE_WHITE }}
          subtitleStyle={{ color: 'rgba(255,255,255,0.8)'}}
          rightComponent={ this.renderChatButton }
          containerStyle={{ 
            paddingLeft: 15,
            backgroundColor: student.schoolType == 'SD' ? theme.COLOR.RED_SD : student.schoolType == 'SMP' ? theme.COLOR.BLUE_SMP : theme.COLOR.BLUE_SMA,
            borderBottomWidth: 0
          }}
          avatar={ student.avatarUri }
        />
        
        <ScrollView
          style={{
            paddingTop: 15
          }}
        >
          <View
            style={{ 
              backgroundColor: theme.COLOR.PURE_WHITE, 
              paddingHorizontal: 15,
              paddingTop: 15,
              paddingBottom: 15
            }}
          >
            <Text 
              style={{ 
                ...globalStyles.textSectionTitle,
                
              }}
            >
              Daftar Kehadiran
            </Text>
            <KehadiranChart
              dataHadir={student.hadir}
              dataAbsen={student.absen}
              dataIzin={student.izin}
            />
            <View>
              <View style={ styles.dataTextContainer }>
                <Icon
                  type='MaterialCommunityIcons'
                  name='square'
                  size={20}
                  color={ theme.COLOR.GREEN }
                />
                <Text style={ styles.dataText }>Jumlah Hadir: { student.hadir }</Text>
              </View>
              <View style={ styles.dataTextContainer }>
                <Icon
                  type='MaterialCommunityIcons'
                  name='square'
                  size={20}
                  color={ theme.COLOR.YELLOW }
                />
                <Text style={ styles.dataText }>Jumlah Izin: { student.izin }</Text>
              </View>
              <View style={ styles.dataTextContainer }>
                <Icon
                  type='MaterialCommunityIcons'
                  name='square'
                  size={20}
                  color={ theme.COLOR.RED }
                />
                <Text style={ styles.dataText }>Jumlah Absen: { student.absen }</Text>
              </View>
            </View>
          </View>

          <View
            style={{ marginTop: 20, width: theme.DEVICE.WIDTH }}
          >
            <Text 
              style={{ 
                ...globalStyles.textSectionTitle,
                paddingHorizontal: 15
              }}
            >
              Informasi Sekolah
            </Text>
            <SchoolCardM 
              schoolName={ student.schoolName }
              schoolType={ student.schoolType }
              schoolAvatarUri=''
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

ProfileSiswa.propTypes = propTypes;
ProfileSiswa.defaultProps = defaultProps;
export default ProfileSiswa;