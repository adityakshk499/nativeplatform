import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Loader from './Loader';
import FlatlistComp from './FlatlistComp';

const UseEffectComp = () => {
  const [loader, setLoader] = useState(true);
  const [products, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setData(data.products);
      setLoader(false);
    }

    fetchData();
  }, []);

  return (
    <>
      {products.length === 0 ? (
        <Loader />
      ) : (
        <View>
          <FlatList
            data={products}
            progressViewOffset={1}
            initialNumToRender={2}
            renderItem={({item}) => <FlatlistComp item={item} />}
            keyExtractor={product => product.id}
          />
        </View>
      )}
    </>
  );
};

export default UseEffectComp;

const styles = StyleSheet.create({
  Loader: {
    width: 100,
    height: '20%',
  },
});
