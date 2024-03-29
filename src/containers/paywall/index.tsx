import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, COMMON_STYLES, MARGINS, SCREEN_HEIGHT} from '../../theme';
import {Button, Text} from '../../components';
import Perks from './perks';
import Title from './title';
import PremiumOptions from './premium-options';
import {StackScreenProps} from '@react-navigation/stack';
import {OnboardFlowParamList, RootStackParamList} from '../../navigation/types';
import {CommonActions, CompositeScreenProps} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = CompositeScreenProps<
  StackScreenProps<OnboardFlowParamList, 'Paywall'>,
  StackScreenProps<RootStackParamList>
>;

const Paywall: React.FC<Props> = props => {
  const [selected, setSelected] = React.useState(0);

  return (
    <View style={[COMMON_STYLES.flex1, styles.container]}>
      <Image
        source={require('../../assets/images/paywall-bg.jpg')}
        style={[styles.background]}
      />
      <ScrollView>
        <Title />
        <View style={[styles.perks]}>
          <Perks />
        </View>

        <View style={styles.form}>
          <PremiumOptions value={selected} onChange={val => setSelected(val)} />

          <Button
            text="Try free for 3 days"
            style={MARGINS.mt25}
            onPress={() => {
              AsyncStorage.setItem('PLANT_APP_USED', '1');
              props.navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'MainFlow'}],
                }),
              );
            }}
          />

          <Text
            color="rgba(255, 255, 255, 0.52)"
            size={9}
            align="center"
            style={MARGINS.mt10}>
            After the 3-day free trial period you’ll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </Text>
          <Text
            color="rgba(255, 255, 255, 0.52)"
            size={11}
            align="center"
            style={MARGINS.mt8}>
            {'Terms  •  Privacy  •  Restore'}
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={[styles.btnClose]}>
        <Image
          source={require('../../assets/icons/close.png')}
          style={[styles.imgClose]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Paywall;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.greenDark,
    paddingTop: SCREEN_HEIGHT * 0.35,
  },
  background: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.5,
    position: 'absolute',
  },
  perks: {
    marginLeft: 24,
    marginTop: 20,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  btnClose: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    top: '10%',
    right: '8%',
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgClose: {
    width: 30,
    height: 30,
  },
});
