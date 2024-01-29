import {StyleSheet} from 'react-native';

const common = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentBox: {
    paddingHorizontal: 24,
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
});

export default common;

export const MARGINS = {
  m10: {margin: 10},
  m15: {margin: 15},
  m20: {margin: 20},
  m30: {margin: 30},
  m40: {margin: 40},
  mt0: {marginTop: 0},
  mt5: {marginTop: 5},
  mt8: {marginTop: 8},
  mt10: {marginTop: 10},
  mt15: {marginTop: 15},
  mt20: {marginTop: 20},
  mt25: {marginTop: 25},
  mt30: {marginTop: 30},
  mt40: {marginTop: 40},
  mr10: {marginRight: 10},
  mr0: {marginRight: 0},
  mr5: {marginRight: 5},
  mr15: {marginRight: 15},
  mr20: {marginRight: 20},
  mr30: {marginRight: 30},
  mr40: {marginRight: 40},
  mr50: {marginRight: 50},
  ml5: {marginLeft: 5},
  ml10: {marginLeft: 10},
  ml15: {marginLeft: 15},
  ml20: {marginLeft: 20},
  ml30: {marginLeft: 30},
  ml40: {marginLeft: 40},
  mb5: {marginBottom: 5},
  mb10: {marginBottom: 10},
  mb20: {marginBottom: 20},
  mb30: {marginBottom: 30},
  mb40: {marginBottom: 40},
};

export const PADDINGS = {
  p10: {padding: 10},
  p15: {padding: 15},
  p20: {padding: 20},
  p25: {padding: 25},
  p30: {padding: 30},
  p40: {padding: 40},
  pt0: {paddingTop: 0},
  pt10: {paddingTop: 10},
  pt20: {paddingTop: 20},
  pt30: {paddingTop: 30},
  pt40: {paddingTop: 40},
  pr10: {paddingRight: 10},
  pr20: {paddingRight: 20},
  pr30: {paddingRight: 30},
  pr40: {paddingRight: 40},
  pl10: {paddingLeft: 10},
  pl20: {paddingLeft: 20},
  pl30: {paddingLeft: 30},
  pl40: {paddingLeft: 40},
  pb10: {paddingBottom: 10},
  pb20: {paddingBottom: 20},
  pb30: {paddingBottom: 30},
  pb40: {paddingBottom: 40},
};
