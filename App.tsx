/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, StatusBar, View} from 'react-native';
import SafariView from 'react-native-safari-view';
import {RookConnectProvider} from 'rook_auth';
import AppleHealthInfo from './src/components/AppleHealthInfo';
import AppleHealthPermissions from './src/components/AppleHealthPermissions';

function App(): JSX.Element {
  const onClick = () => {
    SafariView.show({
      url: 'https://connections.rook-connect.com/client_uuid/d2c34b45-51ff-4ef0-95dc-d87c39136469/user_id/aUniqueUserIdABCD1234/',
    });
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Button title="connections page" onPress={onClick} />
      </View>
      <RookConnectProvider
        keys={{
          clientUUID: '37102ab3-eab6-4ccb-a890-18bc47bdf7e6',
          apiURL: 'https://api.rook-connect.review',
          password: '3VQ0AExGLjM8X0xTKUHeMEtEI6lNgCCpSXQH',
        }}>
        <AppleHealthPermissions />
        <AppleHealthInfo />
      </RookConnectProvider>
    </SafeAreaView>
  );
}

export default App;
