import React from 'react';
import {Button, Text, View} from 'react-native';
import {useRookAHSleep} from 'react-native-rook_ah';

const AppleHealthInfo = () => {
  const {ready, getSleepSummary} = useRookAHSleep();
  const onSleepSummary = async (): Promise<void> => {
    const response = await getSleepSummary('2023-08-11');
    console.log(response);
  };

  return ready ? (
    <View>
      <Button title="Sleep summary" onPress={onSleepSummary} />
    </View>
  ) : (
    <Text>loading</Text>
  );
};

export default AppleHealthInfo;
