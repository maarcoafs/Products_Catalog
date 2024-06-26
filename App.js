import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '@rneui/themed';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { CartScreen } from './components/CartScreen';
import { Carrinho } from './components/Cart';
import { CartProvider } from './context/CartContext';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function AppHeader() {
    const navigation = useNavigation();

    return (
        <Header
            leftComponent={{ text: 'Marco Flores eCommerce', style: styles.headerLeftText }}
            rightComponent={<Carrinho />}
            containerStyle={styles.headerContainer}
        />
    );
}

export default function App() {
    return (
        <CartProvider>
            <SafeAreaView style={styles.container}>
                <NavigationContainer>
                    <AppHeader />
                    <Stack.Navigator initialRouteName="ProductList">
                        <Stack.Screen
                            name="ProductList"
                            component={ProductList}
                            options={{ title: 'Lista de Produtos' }}
                        />
                        <Stack.Screen
                            name="ProductDetail"
                            component={ProductDetail}
                            options={{ title: 'Detalhes do Produto' }}
                        />
                        <Stack.Screen
                            name="CartScreen"
                            component={CartScreen}
                            options={{ title: 'Seu Carrinho' }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar style="auto" />
            </SafeAreaView>
        </CartProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerLeftText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        width: 300,
    },
    headerContainer: {
        backgroundColor: '#FF4500',
        height: 110,
        paddingRight: 5,
    },
});
