import React, { useState } from 'react';
import MainStack from './src/navigation';
import { StatusBar, StatusBarStyle } from 'react-native';
import { theme } from './src/themes/theme';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

const App = () => {

  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(STYLES[2]);
  const [statusBarTransition, setStatusBarTransition] = useState<'fade' | 'slide' | 'none'>(TRANSITIONS[1]);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.color.black}
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
      />
      <MainStack />
    </>
  );
};

export default App;
