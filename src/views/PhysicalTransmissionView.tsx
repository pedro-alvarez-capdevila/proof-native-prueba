/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {PhysicalTransmission} from '../components/PhysicalTransmission';
import {useUser} from '../hooks/useUser';

export const PhysicalTransmissionView = () => {
  const [userID, setUserID] = useState('');

  const {checkUserID} = useUser();

  useEffect(() => {
    checkUserID()
      .then(id => setUserID(id))
      .catch(console.log);
  }, []);

  return (
    <View>
      {userID && <PhysicalTransmission date={'2023-08-10'} userID={'userID'} />}
    </View>
  );
};
