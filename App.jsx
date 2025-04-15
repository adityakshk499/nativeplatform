import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Button,
  TouchableHighlight,
  Touchable,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Comp1 from './components/Comp1';
import Map from './components/Map';
import Section from './components/Section';
import './global.css';
import UseEffectComp from './components/UseEffectComp';
import Loader from './components/Loader';
import Switchandcompunmount from './components/Switchandcompunmount';
const App = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  return (
    <View style={styles.marginTop}>
      {/* <Comp1 hello={count} /> */}
      {/* <Map /> */}
      <Switchandcompunmount show={show} setShow={setShow} />
      {show && <UseEffectComp />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  marginTop: {
    // marginTop: StatusBar.currentHeight,
    height: '100%',
  },
  ImageDimension: {
    width: '100%',
    height: 200,
    resizeMode: 'repeat',
  },
  btn: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
  },
});
