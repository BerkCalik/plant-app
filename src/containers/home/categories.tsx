import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Text} from '../../components';
import {COMMON_STYLES, SCREEN_WIDTH} from '../../theme';
import {ICategory} from '../../types/category';
import {useGetCategoriesQuery} from '../../services/category';

const Categories = () => {
  const {data} = useGetCategoriesQuery();

  const renderItem = (item: ICategory) => (
    <View style={[styles.item]} key={'category-' + item.id}>
      <ImageBackground
        source={{
          uri: item.image.url,
        }}
        style={[COMMON_STYLES.flex1, styles.itemContent]}
        imageStyle={styles.itemBgImageStyle}>
        <Text size={16} w="500">
          {item.title}
        </Text>
      </ImageBackground>
    </View>
  );

  return (
    <View>
      <View style={[styles.list]}>
        {data?.data?.map(item => renderItem(item))}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: SCREEN_WIDTH * 0.42,
    height: SCREEN_WIDTH * 0.42,
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: 'rgba(41, 187, 137, 0.18)',
  },
  itemContent: {
    paddingLeft: 14,
    paddingTop: 16,
  },
  itemBgImageStyle: {
    borderRadius: 14,
    resizeMode: 'contain',
  },
});
