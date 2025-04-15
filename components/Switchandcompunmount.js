import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';

const Switchandcompunmount = ({show, setShow}) => {
  return (
    <View>
      <Switch value={show} onValueChange={() => setShow(!show)} />\
    </View>
  );
};

export default Switchandcompunmount;

const styles = StyleSheet.create({});
