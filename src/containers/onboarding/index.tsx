import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import {COMMON_STYLES, MARGINS} from '../../theme';
import {Button, Dots} from '../../components';
import {OnboardFlowParamList} from '../../navigation/types';
import {StackScreenProps} from '@react-navigation/stack';

const PAGES = [
  {
    image: require('../../assets/images/onboard-take-photo.jpg'),
  },
  {
    image: require('../../assets/images/onboard-get-plant.jpg'),
  },
  {
    image: require('../../assets/images/onboard-take-photo.jpg'),
  },
];

type Props = StackScreenProps<OnboardFlowParamList, 'Onboarding'>;

const Onboarding: React.FC<Props> = props => {
  const [page, setPage] = React.useState(0);

  const onContinuePressed = () => {
    if (page < 2) {
      setPage(page + 1);
    } else {
      props.navigation.navigate('Paywall');
    }
  };

  return (
    <ImageBackground source={PAGES[page].image} style={[COMMON_STYLES.flex1]}>
      <SafeAreaView style={[COMMON_STYLES.flex1, styles.container]}>
        <View style={[COMMON_STYLES.contentBox]}>
          <Button text="Continue" onPress={onContinuePressed} />
        </View>
        <Dots
          dotsCount={PAGES.length}
          activeIndex={page}
          style={[COMMON_STYLES.alignSelfCenter, MARGINS.mt20]}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
});
