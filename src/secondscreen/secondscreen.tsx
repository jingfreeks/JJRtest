import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {usePostBookInfo} from '../react-query/usePostBookInfo';
import moment from 'moment';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';

const SecondScreen = () => {
  const [date, setDate] = useState<string>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [genre, setGenre] = useState<string>('');

  const {mutateAsync: handleInsertRow} = usePostBookInfo();
  const onhandleInsertRow = async () => {
    const response = await handleInsertRow({title, author, date, genre});
    if (response) {
      setDate(new Date());
      setTitle('');
      setAuthor('');
      setGenre('');
    }
  };

  return (
    <View className="flex-1 bg-amber-400 p-6">
      <View className="justify-self-center">
        <Text>Title</Text>

        <TextInput
          className="h-10 w-15 bg-white rounded"
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View className="justify-self-center mt-5">
        <Text>Author</Text>

        <TextInput
          className="h-10 w-15 bg-white"
          onChangeText={setAuthor}
          value={author}
        />
      </View>

      <View className="justify-self-center mt-5 mb-2">
        <Text> Date</Text>
        <TextInput
          className="h-10 w-15 bg-white rounded"
          value={moment(date).format('L')}
          editable={false}
        />

        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Text>Press Here to Select Date</Text>
      </TouchableOpacity>
      <View className="justify-self-center mt-5">
        <Text>Genre</Text>
        <TextInput
          className="h-10 w-15 bg-white"
          onChangeText={setGenre}
          value={genre}
        />
      </View>

      <TouchableOpacity onPress={() => onhandleInsertRow()}>
        <View className="justify-center items-center mt-10 h-10 bg-white justify-self-center rounded">
          <Text>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SecondScreen;
