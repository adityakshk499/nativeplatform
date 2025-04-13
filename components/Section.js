import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Section = () => {
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];
  return (
    <View>
      <SectionList
        sections={DATA}
        keyExtractor={(data, index) => data + index}
        renderItem={({item}) => {
          return <Text style={{padding: 20}}>{item}</Text>;
        }}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
      />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({});
