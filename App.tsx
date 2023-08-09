/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, StatusBar, View} from 'react-native';
import SafariView from 'react-native-safari-view';

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
        <Button title="titleee" onPress={onClick} />
      </View>
    </SafeAreaView>
  );
}

export default App;
