import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDeleteBookInfo} from '../react-query/useDeleteBookInfo';

const ItemListScreens = props => {
  const {data} = props;
  const {title, author, publishedDate, genre, id} = data;
  const {mutateAsync: handleDeleteId} = useDeleteBookInfo();

  return (
    <View className="flex-row">
      <View className="flex-1 p-2">
        <View className="flex-row">
          <Text>Title: </Text>
          <Text>{title}</Text>
        </View>
        <View className="flex-row">
          <Text>Author: </Text>
          <Text>{author}</Text>
        </View>
        <View className="flex-row">
          <Text>Date Published: </Text>
          <Text>{publishedDate}</Text>
        </View>
        <View className="flex-row">
          <Text>Genre: </Text>
          <Text>{genre}</Text>
        </View>
      </View>
      <View className="justify-center  items-center flex-row flex-1 align-center justify-self-center">
        <TouchableOpacity onPress={() => handleDeleteId({id})}>
          <Text>Delete </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ItemListScreens;
