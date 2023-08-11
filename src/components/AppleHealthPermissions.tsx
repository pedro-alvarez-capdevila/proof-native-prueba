import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useRookAHPermissions} from 'react-native-rook_ah';

const AppleHealthPermissions = () => {
  const {ready, requestAllPermissions} = useRookAHPermissions();
  const onAllPermissions = async (): Promise<void> => {
    await requestAllPermissions();
  };

  useEffect(() => {
    console.log(ready);
  }, [ready]);
  return ready ? (
    <View>
      <Button title="apple health permissions" onPress={onAllPermissions} />
    </View>
  ) : (
    <Text>loading</Text>
  );
};

export default AppleHealthPermissions;
