import React from 'react';
import {
  Text as ReactText,
  StyleSheet,
  TextProps,
  TextStyle,
} from 'react-native';
import {COLORS, TYPOGRAPHY} from '../theme';

interface IProps {
  children?: React.ReactNode;
  textProps?: TextProps;
  size?: number;
  style?: TextStyle | TextStyle[];
  color?: string;
  themeColor?: keyof typeof COLORS;
  w?: TextStyle['fontWeight'];
  align?: TextStyle['textAlign'];
}

const Text: React.FC<IProps> = props => {
  let color = COLORS.text;
  if (props.color) {
    color = props.color;
  } else if (props.themeColor) {
    color = COLORS[props.themeColor];
  }

  const mergedStyles = StyleSheet.flatten([
    {fontSize: props.size},
    {color: color},
    {fontWeight: props.w},
    {textAlign: props.align},
    {fontFamily: TYPOGRAPHY.fontFamily},
    props.style,
  ]);

  return (
    <ReactText style={mergedStyles} {...props.textProps}>
      {props.children}
    </ReactText>
  );
};

export default Text;
