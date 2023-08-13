import React from 'react';
import {Button, Text, View} from 'react-native';
import {useRookHCBody} from 'react-native-rook-health-connect';

const HealthConnectInfo = () => {
  const {
    getBodySummaryLastDate,
    hasBodyPermissions,
    requestBodyPermissions,
    getBodySummary,
  } = useRookHCBody();

  const handlePress = async (): Promise<void> => {
    try {
      const result = await getBodySummaryLastDate();
      console.log(result);
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const handlePermissions = async (): Promise<void> => {
    try {
      const result = await hasBodyPermissions();
      console.log(`hasPermissions ${result}`);
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const handleRequestPermissions = async (): Promise<void> => {
    try {
      await requestBodyPermissions();
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const handleOpen = async (): Promise<void> => {
    const result = await getBodySummary('2023-08-12');
    console.log(JSON.stringify(result));
  };

  return (
    <View>
      <Text>info body</Text>
      <Button title="last Date" onPress={handlePress} />
      <Button title="hasAllPermissions" onPress={handlePermissions} />
      <Button
        title="requestAllPermissions"
        onPress={handleRequestPermissions}
      />
      <Button title="get summary" onPress={handleOpen} />
    </View>
  );
};

export default HealthConnectInfo;
