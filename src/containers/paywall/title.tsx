import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../components';
import {COMMON_STYLES, MARGINS} from '../../theme';

const Title = () => {
  return (
    <View style={[styles.titleBox]}>
      <View style={[COMMON_STYLES.row, styles.titleBoxRow]}>
        <Text size={30} w="600" themeColor="textInvert">
          PlantApp
        </Text>
        <Text size={27} w="300" themeColor="textInvert" style={[MARGINS.ml5]}>
          Premium
        </Text>
      </View>
      <Text themeColor="textInvert" w="300" size={16} style={MARGINS.mt5}>
        Access All Features
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleBox: {
    marginLeft: 24,
  },
  titleBoxRow: {
    alignItems: 'flex-end',
  },
});
