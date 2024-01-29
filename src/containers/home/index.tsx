import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from '../../components';
import Header from './header';
import Banner from './banner';
import {COMMON_STYLES, MARGINS} from '../../theme';
import Questions from './questions';
import Categories from './categories';

const Home = () => {
  return (
    <View style={COMMON_STYLES.flex1}>
      <Header />
      <ScrollView style={COMMON_STYLES.flex1}>
        <View style={[styles.content, MARGINS.mt25]}>
          <Banner />
          <Text size={15} w="500" style={[MARGINS.mt20, MARGINS.mb20]}>
            Get Started
          </Text>
        </View>
        <View style={[styles.questions]}>
          <Questions />
        </View>
        <View style={[styles.content, MARGINS.mt20]}>
          <Categories />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
  },
  questions: {
    marginLeft: 24,
  },
});
