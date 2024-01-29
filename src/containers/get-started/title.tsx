import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../components';
import {COMMON_STYLES} from '../../theme';

const Title = () => {
  return (
    <View style={COMMON_STYLES.contentBox}>
      <View style={[COMMON_STYLES.row, styles.titleBox]}>
        <Text size={28}>Welcome to</Text>
        <Text size={28} w="500" style={styles.appName}>
          Plant App
        </Text>
      </View>
      <Text color="rgba(19, 35, 27, 0.7)" style={styles.subtitle}>
        Identify more than 3000+ plants and 88% accuracy.
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleBox: {
    marginTop: 12,
  },
  appName: {
    marginLeft: 8,
  },
  subtitle: {
    marginTop: 8,
  },
});
