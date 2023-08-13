/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, ToastAndroid, View} from 'react-native';
import {useUser} from '../hooks/useUser';

export const UpdateUserID = () => {
  const [userID, setUserID] = useState('');
  const {checkUserID, updateUser} = useUser();

  useEffect(() => {
    checkUserID()
      .then(id => {
        setUserID(id);
      })
      .catch(e => ToastAndroid.show(`${e}`, ToastAndroid.LONG));
  }, []);

  const handleButtonPress = async (): Promise<void> => {
    if (userID.trim() === '') {
      ToastAndroid.show(
        'Enter a valid user ID (number or string)',
        ToastAndroid.LONG,
      );
      return;
    }

    await updateUser({user: userID});

    ToastAndroid.show('Changed successfully', ToastAndroid.LONG);
  };

  return (
    <View>
      <Text>User ID:</Text>
      <View>
        <TextInput
          placeholderTextColor="white"
          placeholder="Enter userID"
          value={userID}
          onChangeText={setUserID}
        />
      </View>
      <Button onPress={handleButtonPress} title="Change User ID" />
    </View>
  );
};
