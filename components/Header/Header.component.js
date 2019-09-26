import React from 'react';
import {
  Header,
  Avatar
} from 'react-native-elements';
import PropTypes from 'prop-types';
import {
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import globalStyles, { theme } from '../../styles/theme.styles'
import Icon from '../Icon/Icon.component';
import NavigationUtils from '../../utils/navigation.utils';

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <Header
        statusBarProps={{ 
          // backgroundColor: this.props.statusBarBackgroundColor, 
          // barStyle: this.props.statusBarContentColor,
          translucent: true
        }}
        containerStyle={{
          backgroundColor: theme.COLOR.PURE_WHITE,
          elevation: this.props.shadow ? 5 : 0,
          height: theme.DEVICE.HEIGHT * 0.15,
          ...this.props.containerStyle
        }}
        leftComponent={ this.props.leftComponent }
        rightComponent={ this.props.rightComponent }
        centerComponent={ this.props.centerComponent }
        leftContainerStyle={{ flex: this.props.leftComponent != undefined ? 5 : 0, ...this.props.leftContainerStyle }}
        rightContainerStyle={{ flex: this.props.rightComponent != undefined ? 5 : 0, ...this.props.rightContainerStyle }}
        centerContainerStyle={{ flex: this.props.centerComponent != undefined ? 5 : 0, ...this.props.centerContainerStyle }}
      />
    )
  }
}

HeaderComponent.propTypes = {
  navigation: PropTypes.object,
  rightComponent: PropTypes.element,
  centerComponent: PropTypes.element,
  leftComponent: PropTypes.element,
  leftContainerStyle: PropTypes.object,
  rightContainerStyle: PropTypes.object,
  centerContainerStyle: PropTypes.object,
  statusBarBackgroundColor: PropTypes.string,
  statusBarContentColor: PropTypes.oneOf(['dark-content', 'light-content']),
  shadow: PropTypes.bool,
  containerStyle: PropTypes.object
}
HeaderComponent.defaultProps = {
  rightComponent: undefined,
  centerComponent:  undefined,
  leftComponent:  undefined,
  leftContainerStyle: {},
  rightContainerStyle: {},
  centerContainerStyle: {},
  statusBarBackgroundColor: theme.COLOR.BLUE_SMA,
  statusBarContentColor: 'dark-content',
  shadow: true,
  containerStyle: {}
}


class HeaderCustom extends React.Component {

  constructor(props) {
    super(props);

    this.onNavigateBack = this.onNavigateBack.bind(this);
  }

  onNavigateBack() {
    console.log('navigateBack');
    NavigationUtils.popAction();
  }

  render() {

    const { 
      title,
      subtitle,
      avatar,
      backButton,
      subtitleStyle,
      titleStyle,
      backButtonColor,
      avatarRight
    } = this.props;
    return (
      <HeaderComponent
        leftComponent= {
          <View style={ hwbbStyles.leftComponentContainer}>

            {
              backButton &&
              <TouchableOpacity 
                onPress={ this.onNavigateBack }
                style={ hwbbStyles.backButtonContainer }
              >
                <Icon 
                  name={ 'arrow-left' }
                  type={ 'MaterialCommunityIcons' }
                  size={ theme.FONT.SIZE.LARGE + 10 }
                  color={ backButtonColor.length > 0 ? backButtonColor : theme.COLOR.GRAY }
                />
              </TouchableOpacity>
            }

            {
              avatar.length > 0 && !avatarRight &&
              <Avatar 
                rounded 
                source={{ uri: avatar }}
                containerStyle={{ marginRight: 10 }}
              />
            }

            <View>
              {
                title.length > 0 &&
                <Text 
                  style={{
                    ...globalStyles.textUsername,
                    ...titleStyle,
                    fontFamily: theme.FONT.FAMILY.NUNITO.BOLD,
                  }}
                  ellipsizeMode={'tail'}
                >
                  { title }
                </Text>
              }
              {
                subtitle.length > 0 &&
                <Text 
                  style={{ 
                    ...globalStyles.textBody2,
                    ...subtitleStyle
                  }}
                  ellipsizeMode={'tail'}
                >
                  { subtitle }
                </Text>
              }
            </View>
          </View>
        }
        shadow={true}
        rightComponent={ 
          avatarRight ? 
          <Avatar 
            rounded
            source={{ uri: avatar }}
            containerStyle={{ marginRight: 15 }}
          />
          :
          this.props.rightComponent 
        }
        centerComponent={ this.props.centerComponent }
        leftContainerStyle={{ flex: this.props.leftComponent != undefined ? 5 : 0, ...this.props.leftContainerStyle }}
        rightContainerStyle={{ flex: this.props.rightComponent != undefined ? 5 : 0, ...this.props.rightContainerStyle }}
        centerContainerStyle={{ flex: this.props.centerComponent != undefined ? 5 : 0, ...this.props.centerContainerStyle }}
        containerStyle={{
          backgroundColor: theme.COLOR.PURE_WHITE,
          elevation: this.props.shadow ? 5 : 0,
          height: theme.DEVICE.HEIGHT * 0.15,
          ...this.props.containerStyle
        }}
      />
    )
  }
}

HeaderCustom.propTypes = {
  navigation: PropTypes.object,
  rightComponent: PropTypes.element,
  centerComponent: PropTypes.element,
  leftComponent: PropTypes.element,
  leftContainerStyle: PropTypes.object,
  rightContainerStyle: PropTypes.object,
  centerContainerStyle: PropTypes.object,
  statusBarBackgroundColor: PropTypes.string,
  statusBarContentColor: PropTypes.oneOf(['dark-content', 'light-content']),
  shadow: PropTypes.bool,
  containerStyle: PropTypes.object,
  backButton: PropTypes.bool,
  avatar: PropTypes.string,
  avatarRight: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleStyle: PropTypes.object,
  backButtonColor: PropTypes.string,
  subtitleStyle: PropTypes.object
}
HeaderCustom.defaultProps = {
  navigation: {},
  rightComponent: undefined,
  centerComponent:  undefined,
  leftComponent:  undefined,
  leftContainerStyle: {},
  rightContainerStyle: {},
  centerContainerStyle: {},
  statusBarBackgroundColor: theme.COLOR.BLUE_SMA,
  statusBarContentColor: 'dark-content',
  shadow: true,
  containerStyle: {},
  backButton: true,
  avatar: '',
  avatarRight: false,
  title: 'Default Title',
  subtitle: '',
  titleStyle: {},
  backButtonColor: '',
  subtitleStyle: {},
}

const hwbbStyles = StyleSheet.create({
  leftComponentContainer: { 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  backButtonContainer: { 
    height: theme.DEVICE.HEIGHT * 0.05, 
    width: theme.DEVICE.WIDTH * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  }
})

export default HeaderComponent;
export {
  HeaderCustom
}