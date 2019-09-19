import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Header, { HeaderCustom } from './Header.component';

storiesOf('Header', module)
  .add('default', () => <Header />)
  .add('with BackButton and Title', 
        () => <HeaderCustom />
      )
  .add('with BackButton, Title, and Avatar', 
        () => <HeaderCustom 
                avatar='asdf'
                title='Test'
              />
      )