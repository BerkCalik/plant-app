import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Text} from '../../components';
import {COMMON_STYLES, MARGINS, TYPOGRAPHY} from '../../theme';

const Header = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <ImageBackground source={require('../../assets/images/header-bg.jpg')}>
        <View style={[styles.content]}>
          <Text size={16}>Hi, plant lover!</Text>
          <Text size={24} w="500" style={MARGINS.mt5}>
            Good Afternoon! ⛅
          </Text>
          <View style={[styles.inputContainer, COMMON_STYLES.row]}>
            <Image
              source={require('../../assets/icons/search.png')}
              style={styles.inputIcon}
            />
            <TextInput
              style={[styles.input, {fontFamily: TYPOGRAPHY.fontFamily}]}
              placeholder="Search for plants"
              placeholderTextColor={'#AFAFAF'}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(246, 246, 246, 0.84)',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 5,
    borderBottomWidth: 0.2,
    borderColor: 'rgba(60, 60, 67, 0.25)',
    paddingBottom: 14,
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    marginTop: 14,
    borderWidth: 0.2,
    borderColor: 'rgba(60, 60, 67, 0.25)',
    borderRadius: 12,
  },
  input: {
    paddingVertical: 14,
    marginLeft: 10,
    fontSize: 16,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
});
