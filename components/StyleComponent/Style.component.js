import React from 'react';
import { 
  Text, 
  View 
} from 'react-native';

import globalStyles from '../../styles/theme.styles';

const TextStyle = () => {
  return (
    <View>
      <Text style={ globalStyles.textH4 }>Heading 4</Text>
      <Text style={ globalStyles.textH5 }>Heading 5</Text>
      <Text style={ globalStyles.textH6 }>Heading 6</Text>
      <Text style={ globalStyles.textHSub }>Sub Heading</Text>
      <Text style={ globalStyles.textSectionTitle }>Section Title</Text>
      <Text style={ globalStyles.textBody }>Body</Text>
      <Text style={ globalStyles.textBody2 }>Body2</Text>
      <Text style={ globalStyles.textUsername }>Username</Text>
      <Text style={ globalStyles.textCaption }>Caption</Text>
    </View>
  )
}
export {
  TextStyle
};