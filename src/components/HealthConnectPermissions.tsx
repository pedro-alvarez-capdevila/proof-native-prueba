import React from 'react';
import {Button, Text, View} from 'react-native';
import {useRookHCPermissions} from 'react-native-rook-health-connect';

const HealthConnectPermissions = () => {
  const {
    checkAvailability,
    hasAllPermissions,
    requestPermissions,
    openHealthConnectSettings,
  } = useRookHCPermissions();

  const handlePress = async (): Promise<void> => {
    try {
      const result = await checkAvailability();
      console.log(result);
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const handlePermissions = async (): Promise<void> => {
    try {
      const result = await hasAllPermissions();
      console.log(`has permissions ${result}`);
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const handleRequestPermissions = async (): Promise<void> => {
    try {
      await requestPermissions();
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const handleOpen = async (): Promise<void> => {
    try {
      await openHealthConnectSettings();
    } catch (error) {
      console.log(`${error}`);
    }
  };

  return (
    <View>
      <Text>Permissions</Text>
      <Button title="Availability" onPress={handlePress} />
      <Button title="hasAllPermissions" onPress={handlePermissions} />
      <Button
        title="requestAllPermissions"
        onPress={handleRequestPermissions}
      />
      <Button title="openHC" onPress={handleOpen} />
    </View>
  );
};

export default HealthConnectPermissions;
