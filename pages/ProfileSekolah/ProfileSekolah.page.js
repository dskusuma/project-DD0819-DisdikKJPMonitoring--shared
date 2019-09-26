import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

import  { HeaderCustom }  from '../../components/Header/Header.component'
import globalStyles, { theme } from '../../styles/theme.styles';
import Icon from '../../components/Icon/Icon.component';
import KuotaSekolahChart from '../../components/KuotaSekolahChart/KuotaSekolahChart.component';
import styles from './ProfileSekolah.page.styles';
import mocks from '../../../constants/mocks/mock_data';

const propTypes = {
  schoolName: PropTypes.string,
  schoolAddress: PropTypes.string,
  schoolType: PropTypes.oneOf(['SD', 'SMP', 'SMA']),
  schoolAvatarUri: PropTypes.string,
  kursiTersisa: PropTypes.number,
  kursiTotal: PropTypes.number,
}
const defaultProps = {
  schoolName: 'SDN 1 Menteng',
  schoolType: 'SD',
  schoolAddress: 'Jln. Menteng, Jakarta Pusat',
  schoolAvatarUri: '',
  kursiTersisa: 3,
  kursiTotal: 30,
}

class ProfileSekolah extends React.Component {

  constructor(props){
    super(props);
  
    this.state = {
      // Error Handling
      hasError: false,
      schoolData: {},
      content: ''
    }

  }
  
  componentDidMount() {
    const { navigation } = this.props;
    let schoolData;

    if ( navigation != undefined ) {
      let schoolData = navigation.getParam('schoolData', 'fallback');
      let content = navigation.getParam('content', 'kuota_sekolah');
      console.log('content', content);
      console.log('schoolData', schoolData);
      this.setState({ schoolData, content })
    }
     
  }
  
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

  renderKuotaSekolah() {
    const { schoolData } = this.state;
    return (
      <View style={ styles.contentContainer }>
        <Text style={ globalStyles.textSectionTitle }>
          Kuota Sekolah
        </Text>
        <KuotaSekolahChart
          kursiTersisa={schoolData.availableStudent}
          kursiTotal={schoolData.totalStudent}
        />
        <View>
          <View style={ styles.dataTextContainer }>
            <Icon
              type='MaterialCommunityIcons'
              name='square'
              size={20}
              color={ theme.COLOR.GRAYCHARTLIGHT }
            />
            <Text style={ styles.dataText }>Kursi Tersisa: { schoolData.availableStudent }</Text>
          </View>
          <View style={ styles.dataTextContainer }>
            <Icon
              type='MaterialCommunityIcons'
              name='square'
              size={20}
              color={ theme.COLOR.GRAYCHARTDARK }
            />
            <Text style={ styles.dataText }>Kursi Total: { schoolData.totalStudent }</Text>
          </View>
        </View>
      </View>
    )
  }

  renderListSiswa() {
    const siswa = mocks.SISWA.DATA;

    return (
      <View>
      {
        siswa.map((s, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: s.avatarUri } }}
            title={s.name}
            subtitle={'NIK: ' + s.nik}
            bottomDivider
          />
        ))
      }
      </View>
    )
  }
  render() {
    if (this.state.hasError) {
      // Fallback UI when Error
      // return 
    }

    const { 
      schoolType,
      schoolName,
      schoolAddress,
      schoolAvatarUri,
      kursiTersisa,
      kursiTotal
    } = this.props;

    const { schoolData, content} = this.state;

    return (
      <View
        style={{ 
          height: '100%',
          backgroundColor: theme.COLOR.COMPONENT.BACKGROUND
        }}
      >
        <HeaderCustom 
          props={this.props}
          avatar={ schoolData.schoolAvatarUri }
          avatarRight={true}
          title={ schoolData.schoolName }
          subtitle={ schoolData.schoolAddress }
          backButtonColor={ theme.COLOR.PURE_WHITE }
          titleStyle={{ color: theme.COLOR.PURE_WHITE }}
          subtitleStyle={{ color: 'rgba(255,255,255,0.8)'}}
          rightComponent={ this.renderChatButton }
          containerStyle={{ 
            paddingLeft: 15,
            backgroundColor: schoolData.schoolType == 'SD' ? theme.COLOR.RED_SD : schoolData.schoolType == 'SMP' ? theme.COLOR.BLUE_SMP : theme.COLOR.BLUE_SMA,
            borderBottomWidth: 0
          }}
        />
        
        <ScrollView
          style={{
            paddingTop: content == 'list_siswa' ? 0 : 15
          }}
        >
          {
            content == 'list_siswa' ?
            this.renderListSiswa()
            :
            this.renderKuotaSekolah()
          }

        </ScrollView>
      </View>
    )
  }
}

ProfileSekolah.propTypes = propTypes;
ProfileSekolah.defaultProps = defaultProps;
export default ProfileSekolah;