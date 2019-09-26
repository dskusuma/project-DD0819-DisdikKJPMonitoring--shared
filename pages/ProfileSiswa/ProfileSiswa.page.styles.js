import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme.styles';

const styles = StyleSheet.create({
  dataTextContainer: { 
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dataText: {
    marginLeft: 10,
    color: theme.COLOR.GRAY,
    fontSize: theme.FONT.SIZE.SUBTITLE1
  },
})

export default styles;