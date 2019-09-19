import React from 'react';
import { 
  Text, 
  View 
} from 'react-native';

import globalStyles from '../../styles/theme.styles';

const TextStyle = () => {
  return (
    <View>
      <Text>Heading 1</Text>
      <Text>Heading 2</Text>
      <Text style={ globalStyles.textSectionTitle }>Section Title</Text>
      <Text style={ globalStyles.textBody }>Body</Text>
    </View>
  )
}
export {
  TextStyle
};