import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '../../components';
import {COMMON_STYLES, MARGINS} from '../../theme';

const TEXT_COLOR = 'rgba(89, 113, 101, 0.7)';

const Terms = () => {
  return (
    <View style={[styles.terms]}>
      <Text color={TEXT_COLOR} size={12}>
        By tapping next, you are agreeing to PlantID
      </Text>
      <View style={[COMMON_STYLES.row, MARGINS.mt5]}>
        <TouchableOpacity>
          <Text color={TEXT_COLOR} size={12} style={[styles.termItem]}>
            Terms of Use
          </Text>
        </TouchableOpacity>
        <Text color={TEXT_COLOR} size={12} style={[styles.termsAnd]}>
          &
        </Text>
        <TouchableOpacity>
          <Text color={TEXT_COLOR} size={12} style={[styles.termItem]}>
            Privacy Policy.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({
  terms: {
    alignItems: 'center',
    marginTop: 17,
  },
  termsAnd: {
    marginHorizontal: 3,
  },
  termItem: {
    textDecorationLine: 'underline',
  },
});
