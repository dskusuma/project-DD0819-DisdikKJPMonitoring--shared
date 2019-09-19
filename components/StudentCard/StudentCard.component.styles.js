import React from 'react';
import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme.styles';

const styles = StyleSheet.create({
  container: {
    height: theme.DEVICE.HEIGHT * 0.25,
    maxHeight: 300,
    width: theme.DEVICE.WIDTH * 0.9,
    maxWidth: 400,
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: theme.COLOR.PURE_WHITE,
    elevation: 10,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  topContentContainer: {
    flexDirection: 'row'
  },
  topTextContainer: {
    flexDirection: 'column',
    flex: 3
  },
  textKJP: {
    fontFamily: theme.FONT.FAMILY.IBMPLEXMONO.MEDIUM,
    fontSize: theme.FONT.SIZE.CAPTION,
    color: theme.COLOR.GRAY
  },
  textStudent: {
    fontFamily: theme.FONT.FAMILY.NUNITO.BOLD,
    color: theme.COLOR.BLACK80,
    fontSize: theme.FONT.SIZE.H6
  },
  topAvatarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  avatarContainer: {
    borderWidth: 5,
    borderColor: '#000'
  },
  bottomContentContainer: { 
    flexDirection: 'row' 
  },
  schoolNameContainer: { 
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textSchoolName: {
    marginLeft: 10,
    color: theme.COLOR.GRAY,
    fontSize: theme.FONT.SIZE.SUBTITLE1
  },
  availableStudent: { 
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
   },
  textAvailableStudent: {
    marginRight: 10,
    color: theme.COLOR.GRAY,
    fontSize: theme.FONT.SIZE.SUBTITLE1
  }
})

export default styles;