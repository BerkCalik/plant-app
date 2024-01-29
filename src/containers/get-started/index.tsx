import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {Button} from '../../components';
import {COMMON_STYLES, SCREEN_HEIGHT} from '../../theme';
import Title from './title';
import Terms from './terms';

const GetStarted = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={[styles.background]}>
      <SafeAreaView style={[COMMON_STYLES.flex1]}>
        <Title />
        <Image
          source={require('../../assets/images/get-started-image.png')}
          style={styles.image}
        />
        <View style={[COMMON_STYLES.contentBox]}>
          <Button text="Get Started" />
          <Terms />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.6,
    resizeMode: 'contain',
    marginTop: 24,
  },
});
