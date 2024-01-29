import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {Text} from '../../components';
import {MARGINS, SCREEN_WIDTH} from '../../theme';

const data = [
  {
    icon: require('../../assets/icons/scanner.png'),
    title: 'Unlimited',
    subtitle: 'Plant Identify',
  },
  {
    icon: require('../../assets/icons/speedometer.png'),
    title: 'Faster',
    subtitle: 'Process',
  },
  {
    icon: require('../../assets/icons/spa.png'),
    title: 'Detailed',
    subtitle: 'Plant care',
  },
];

const Perks = () => {
  const renderItem = (item: (typeof data)['0']) => (
    <View style={[styles.item]}>
      <View style={[styles.iconBox]}>
        <Image source={item.icon} style={styles.icon} />
      </View>
      <Text themeColor="textInvert" size={20} w="500" style={[MARGINS.mt15]}>
        {item.title}
      </Text>
      <Text
        themeColor="textInvert"
        size={12}
        color="rgba(255, 255, 255, 0.7)"
        style={[MARGINS.mt5]}>
        {item.subtitle}
      </Text>
    </View>
  );

  return (
    <FlatList
      horizontal
      data={data}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={(_, i) => 'perk-' + i.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Perks;

const styles = StyleSheet.create({
  item: {
    width: SCREEN_WIDTH * 0.42,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: 16,
    marginRight: 8,
  },
  iconBox: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    alignSelf: 'flex-start',
    borderRadius: 8,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
});
