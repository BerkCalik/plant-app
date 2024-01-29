import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from './text';
import {COMMON_STYLES, MARGINS, SCREEN_WIDTH} from '../theme';

const BottomBar = () => {
  const renderItem = (title: string, icon: any) => (
    <TouchableOpacity style={[styles.item]}>
      <Image source={icon} style={[styles.icon]} />
      <Text size={11} style={MARGINS.mt5}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.safe]}>
      <View style={[styles.container]}>
        <View style={[COMMON_STYLES.row]}>
          {renderItem('Home', require('../assets/icons/tab-home.png'))}
          {renderItem(
            'Diagnose',
            require('../assets/icons/tab-healthcare.png'),
          )}
          <View style={{width: 80}} />
          {renderItem('My Garden', require('../assets/icons/tab-garden.png'))}
          {renderItem('Profile', require('../assets/icons/tab-profile.png'))}
        </View>

        <TouchableOpacity style={styles.btnScan}>
          <Image
            source={require('../assets/icons/tab-scan.png')}
            style={[styles.icon]}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 6,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  btnScan: {
    width: SCREEN_WIDTH * 0.16,
    height: SCREEN_WIDTH * 0.16,
    bottom: 6,
    position: 'absolute',
    backgroundColor: '#28AF6E',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.24)',
  },
});
