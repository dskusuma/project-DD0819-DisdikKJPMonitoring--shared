import React from 'react';
import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme.styles';

const styles = StyleSheet.create({
  schoolCardMContainer: {
    height: theme.DEVICE.HEIGHT * 0.2,
    maxHeight: 120,
    width: theme.DEVICE.WIDTH * 0.3,
    maxWidth: 131,
    borderRadius: 10,
    backgroundColor: theme.COLOR.PURE_WHITE,
    elevation: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 5,
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textSchoolName: { 
    marginTop: 10,
    textAlign: 'center'
  },
  schoolCardLContainer: {
    height: theme.DEVICE.HEIGHT * 0.3,
    width: theme.DEVICE.WIDTH * 0.435,
    borderRadius: 10,
    backgroundColor: theme.COLOR.PURE_WHITE,
    elevation: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  textSchoolNameL: {
    fontFamily: theme.FONT.FAMILY.NUNITO.BOLD,
    fontSize: theme.FONT.SIZE.SUBTITLE1 + 2,
    marginTop: 10,
    textAlign: 'center',
  },
  textSchoolAddressL: {
    color: theme.COLOR.GRAY,
    textAlign: 'center'
  },
  textKuota: {
    color: theme.COLOR.GRAY,
    marginLeft: 5
  },

})

export default styles;