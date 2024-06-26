import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CartContext } from "../context/CartContext";
import { useNavigation } from '@react-navigation/native';

export function Carrinho() { // Renomeei o componente para 'Carrinho'
    const { cart } = useContext(CartContext);
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('CartScreen')}>
            <View style={styles.cartContainer}>
                <Text style={styles.cartText}>
                    Carrinho: {cart.length} itens
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cartButton: {
        backgroundColor: '#007BFF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 1,
    },
    cartContainer: {
        alignItems: 'right',
    },
    cartText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
