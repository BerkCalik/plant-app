import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '../../components';
import {COMMON_STYLES, MARGINS} from '../../theme';

interface IProps {
  value: number;
  onChange: (value: number) => void;
}

const PremiumOptions: React.FC<IProps> = props => {
  return (
    <View>
      <TouchableOpacity
        style={[
          COMMON_STYLES.row,
          styles.box,
          props.value === 1 ? styles.boxSelected : null,
        ]}
        onPress={() => props.onChange(1)}>
        <View
          style={[
            styles.radio,
            props.value === 1 ? styles.radioSelected : null,
          ]}
        />
        <View style={[styles.content]}>
          <Text themeColor="textInvert" w="600" size={16}>
            1 Month
          </Text>
          <Text
            color="rgba(255, 255, 255, 0.7)"
            size={12}
            style={[MARGINS.mt5]}>
            $2.99/month, auto renewable
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          COMMON_STYLES.row,
          MARGINS.mt15,
          styles.box,
          props.value === 2 ? styles.boxSelected : null,
        ]}
        onPress={() => props.onChange(2)}>
        <View
          style={[
            styles.radio,
            props.value === 2 ? styles.radioSelected : null,
          ]}
        />
        <View style={[styles.content]}>
          <Text themeColor="textInvert" w="600" size={16}>
            1 Year
          </Text>
          <Text
            color="rgba(255, 255, 255, 0.7)"
            size={12}
            style={[MARGINS.mt5]}>
            First 3 days free, then $529,99/year
          </Text>
        </View>
        <View style={[styles.offer]}>
          <Text themeColor="textInvert" size={12} w="500">
            Save 50%
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PremiumOptions;

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  boxSelected: {
    borderWidth: 1.5,
    borderColor: '#28AF6E',
  },
  radio: {
    width: 24,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
  },
  radioSelected: {
    backgroundColor: '#ffffff',
    borderWidth: 8,
    borderColor: '#28AF6E',
  },
  content: {
    marginLeft: 12,
  },
  offer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#28AF6E',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 20,
  },
});
