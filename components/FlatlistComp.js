import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatlistComp = ({item}) => {
  return (
    <View style={styles.View}>
      <Image style={styles.images} source={{uri: item.images[0]}} />

      <Text style={styles.Title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>
        {'\u0AF1'}
        {item.price}
      </Text>

      {console.log(item.images[0])}
    </View>
  );
};

export default FlatlistComp;

const styles = StyleSheet.create({
  View: {
    padding: 10,
    borderBlockColor: 'red',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  images: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'fit',
  },
});
