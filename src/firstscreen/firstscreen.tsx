import React from 'react';
import {View, ActivityIndicator, Text, FlatList} from 'react-native';
import Itemlist from './itemlist';
import {useGetBookInfo} from '../react-query/useGetBookInfo';

const FirstScreen = () => {
  const {data, isLoading, error} = useGetBookInfo();
  if (isLoading) {
    return (
      <View className="flex-1 bg-amber-400 justify-center">
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }
  if (error) {
    return (
      <View className="flex-1 bg-amber-400 justify-center">
        <Text>{error}</Text>
      </View>
    );
  }
  console.log('datasss', data, isLoading);
  return (
    <View className="flex-1 bg-amber-400">
      <FlatList
        data={data}
        extraData={isLoading}
        renderItem={({item}) => <Itemlist data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default FirstScreen;
