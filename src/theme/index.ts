import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

import COLORS from './colors';
import TYPOGRAPHY from './typography';
import COMMON_STYLES, {MARGINS, PADDINGS} from './common';

export {
  COLORS,
  TYPOGRAPHY,
  COMMON_STYLES,
  MARGINS,
  PADDINGS,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
};
