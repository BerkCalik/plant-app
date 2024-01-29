import React from 'react';
import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import Text from './text';
import {COLORS} from '../theme';

interface IProps {
  text: string;
  onPress?: () => void;
  style?: ViewStyle;
}

const Button: React.FC<IProps> = props => {
  let DEFAULT_COLOR = COLORS.primary;
  let PRESSED_COLOR = COLORS.primaryPressed;
  let TEXT_COLOR = COLORS.textInvert;

  return (
    <Pressable onPress={props.onPress}>
      {({pressed}) => (
        <View
          style={[
            styles.button,
            {
              backgroundColor: pressed ? PRESSED_COLOR : DEFAULT_COLOR,
            },
            props.style,
          ]}>
          <Text size={15} w="700" color={TEXT_COLOR}>
            {props.text}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
