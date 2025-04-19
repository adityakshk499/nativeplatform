import {AppState, Button, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRef} from 'react';

const AppStateComp = () => {
  const [appStateVisible, setAppStateVisible] = useState(AppState.currentState);
  const a = 0;
  const b = useRef(0);
  useEffect(() => {
    AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        console.log('App is background');
      } else {
        console.log('app is active');
      }
    });
  }, []);
  return (
    <View>
      <Text>AppStateComp</Text>
      <Button
        title="press"
        onPress={() => {
          a + 1;
          b.current = b.current + 1;
          console.log(a);
          console.log(b.current);
        }}
      />
    </View>
  );
};

export default AppStateComp;

const styles = StyleSheet.create({});
