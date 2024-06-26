import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { CartContext } from '../context/CartContext';

export function ProductDetail({ route }) {
    const { product } = route.params;
    const { addToCart } = useContext(CartContext);

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Button
                    title="Adicionar ao carrinho"
                    onPress={() => addToCart(product)}
                    color="#000080"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F5DEB3',
    },
    productImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
    detailsContainer: {
        marginTop: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
    },
});
