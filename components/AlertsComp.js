import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Alert} from 'react-native';

const AlertsComp = () => {
  const alertBtnTwo = () => {
    Alert.alert('Hello', 'THis is a Sample alert', [
      {text: 'Cancel', onPress: () => console.warn('Cancel Pressed')},
      {text: 'OK No', onPress: () => console.warn('OK Pressed')},
    ]);
  };

  const alertBtnThree = () => {
    Alert.alert(
      'Hello',
      'THis is a sample alert which show three btns',
      [{text: 'Ok'}, {text: 'Cancel', style: 'cancel'}, {text: 'Maybe'}],
      {cancelable: true, onDismiss: () => console.warn('Alert Dismissed')},
    );
  };

  // you have to import Alert from react native to use it
  //   Alert.prompt will work on in ios device only
  // alert.alert is function whill take main message as first secondary message as second and btn array as third and canceable config as foruth arguments
  // cancelable:true will alow you to touch anywhere outside the alert to dismiss it
  // onDismiss is the function that revoked when user do this

  return (
    <View>
      <Button color={'red'} title="Hello" onPress={alertBtnTwo} />
      <Button color={'red'} title="Hello" onPress={alertBtnThree} />
    </View>
  );
};

export default AlertsComp;

const styles = StyleSheet.create({});
