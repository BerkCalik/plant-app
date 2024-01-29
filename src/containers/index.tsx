import React from 'react';
import {View} from 'react-native';
import MainNavigator from '../navigation';
import {COMMON_STYLES} from '../theme';
import {RootStackParamList} from '../navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [initialRouteName, setInitialRouteName] =
    React.useState<keyof RootStackParamList>();

  const checkAppIsUsed = async () => {
    const res = await AsyncStorage.getItem('PLANT_APP_USED');
    setInitialRouteName(res === '1' ? 'MainFlow' : 'OnboardFlow');
  };

  React.useEffect(() => {
    checkAppIsUsed();
  }, []);

  if (initialRouteName) {
    return (
      <View style={COMMON_STYLES.flex1}>
        <MainNavigator initialRouteName={initialRouteName} />
      </View>
    );
  }

  return <></>;
};

export default App;
