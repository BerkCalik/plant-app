import React from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {COMMON_STYLES, SCREEN_WIDTH} from '../../theme';
import {Text} from '../../components';

const data = [
  {
    id: 1,
    title: 'How to identify plants?',
    subtitle: 'Life Style',
    image_uri:
      'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard.png?alt=media',
    uri: 'https://plantapp.app/blog/identifying-plant-in-10-steps/',
    order: 1,
  },
  {
    id: 2,
    title: 'Differences Between Species and Varieties?',
    subtitle: 'Plant Identify',
    image_uri:
      'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2Fcard2.png?alt=media',
    uri: 'https://plantapp.app/blog/differences-between-species-and-varieties/',
    order: 2,
  },
  {
    id: 3,
    title: 'The reasons why the same plant can look different?',
    subtitle: 'Life Style',
    image_uri:
      'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard3.png?alt=media',
    uri: 'https://plantapp.app/blog/same-seeds-but-different-looking-plants/',
    order: 3,
  },
];

const Questions = () => {
  const renderItem = (item: any) => (
    <TouchableOpacity style={[styles.item]}>
      <ImageBackground
        source={{
          uri: item.image_uri,
        }}
        style={[COMMON_STYLES.flex1, styles.itemContent]}
        imageStyle={styles.itemBgImageStyle}>
        <Text themeColor="textInvert" size={15} style={styles.title}>
          {item.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => renderItem(item)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  item: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_WIDTH * 0.4,
    borderRadius: 14,
    marginRight: 10,
  },
  itemContent: {
    paddingLeft: 14,
    paddingTop: SCREEN_WIDTH * 0.28,
  },
  itemBgImageStyle: {
    borderRadius: 14,
  },
  title: {
    letterSpacing: -0.24,
    lineHeight: 20,
  },
});
