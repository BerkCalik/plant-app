import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS, COMMON_STYLES} from '../theme';

interface IProps {
  style?: ViewStyle | ViewStyle[];
  dotsCount: number;
  activeIndex: number;
}

const Dots: React.FC<IProps> = props => {
  return (
    <View style={[props.style]}>
      <View style={[COMMON_STYLES.row]}>
        {new Array(props.dotsCount).fill('').map((_, i) => (
          <View
            style={[
              styles.dot,
              props.activeIndex === i ? styles.dotActive : null,
            ]}
            key={'dot-' + i.toString()}
          />
        ))}
      </View>
    </View>
  );
};

export default Dots;

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    backgroundColor: 'rgba(19, 35, 27, 0.25)',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: COLORS.text,
    width: 12,
    height: 12,
  },
});
