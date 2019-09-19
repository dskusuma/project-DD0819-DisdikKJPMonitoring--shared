import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { SchoolCardM, SchoolCardL } from './SchoolCard.component';

storiesOf('School Card', module)
  .add('default medium', () => <SchoolCardM />)
  .add('all medium', () => {
        return (
          <View>
            <SchoolCardM 
              schoolName='SDN 1 Menteng'
              schoolType='SD'
              schoolAvatarUri=''
            />
            <SchoolCardM 
              schoolName='SMP 1 Menteng'
              schoolType='SMP'
              schoolAvatarUri=''
            />
            <SchoolCardM 
              schoolName='SMA 1 Menteng'
              schoolType='SMA'
              schoolAvatarUri=''
            />
          </View>
        )
      })
  .add('default large', () => <SchoolCardL />)
  .add('many large', () => {
        return (
          <View
            style={{ 
              flexDirection: 'row',
              width: '100%',
              flexWrap: 'wrap',
              paddingHorizontal: 15,
              justifyContent: 'space-between'
            }}
          >
            <SchoolCardL 
              schoolName='SDN 1 Menteng'
              schoolType='SD'
              schoolAvatarUri=''
            />
            <SchoolCardL 
              schoolName='SMP 1 Menteng'
              schoolType='SMP'
              schoolAvatarUri=''
            />
            <SchoolCardL 
              schoolName='SMA 1 Menteng'
              schoolType='SMA'
              schoolAvatarUri=''
            />
            <SchoolCardL 
              schoolName='SMA 1 Menteng'
              schoolType='SMA'
              schoolAvatarUri=''
            />
          </View>
        )
      })