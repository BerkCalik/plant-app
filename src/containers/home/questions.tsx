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
import {useGetQuestionsQuery} from '../../services/question';
import {IQuestion} from '../../types/question';

const Questions = () => {
  const {data} = useGetQuestionsQuery();

  const renderItem = (item: IQuestion) => (
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
    paddingTop: SCREEN_WIDTH * 0.26,
  },
  itemBgImageStyle: {
    borderRadius: 14,
  },
  title: {
    letterSpacing: -0.24,
    lineHeight: 20,
  },
});
