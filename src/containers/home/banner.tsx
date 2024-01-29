import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from '../../components';
import {COMMON_STYLES, MARGINS} from '../../theme';

const Banner = () => {
  return (
    <View style={[styles.banner, COMMON_STYLES.row]}>
      <Image
        source={require('../../assets/icons/envelope.png')}
        style={styles.icon}
      />
      <View style={[styles.content]}>
        <Text size={16} w="700" color="#FFDE9CCC">
          FREE Premium Available
        </Text>
        <Text size={13} color="#FFDE9CCC" style={MARGINS.mt5}>
          Tap to upgrade your account!
        </Text>
      </View>
      <Image
        source={require('../../assets/icons/chevron-right.png')}
        style={styles.arrow}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#24201A',
    padding: 16,
    borderRadius: 12,
  },
  icon: {
    width: 40,
    height: 40,
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  arrow: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
});
