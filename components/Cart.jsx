import { StyleSheet, Text } from "react-native";

export function Cart(){
    return (
        <Text style={styles.cartText}>
            0
        </Text>
    )
}

const styles = StyleSheet.create({
    cartText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});