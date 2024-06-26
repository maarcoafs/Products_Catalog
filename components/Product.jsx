import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Card } from '@rneui/themed';

export function Product({ item }) {
  return (
    <Card>
      <Card.Title>{item.title}</Card.Title>
      <Card.Divider />
      <View style={styles.productDetails}>
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productPrice}>${item.price}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  productDetails: {
    flexDirection: 'row',
  },
  productImage: {
    width: 80,
    height: 80,
  },
  productInfo: {
    paddingLeft: 20,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
