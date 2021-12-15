import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image
        // source={{uri: 'https://via.placeholder.com/150'}}
        source={require('../assets/images/young_and_happy.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.description}>빈공간입니다</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
});

export default Empty;
