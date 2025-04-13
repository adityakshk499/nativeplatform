import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoaderKit from 'react-native-loader-kit';

const Loader = () => {
  return (
    <View style={styles.LoaderView}>
      <LoaderKit
        style={styles.Loader}
        name={'BallClipRotateMultiple'} // Optional: see list of animations below
        color={'black'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  LoaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    alignContent: 'center',
    alignSelf: 'center',
  },
  Loader: {
    width: 100,
    height: '20%',
  },
});
