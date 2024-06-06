import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Header } from '@rneui/themed';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';

import DATA_PRODUCTS from './data.json';

export default function App() {
  return (
    <CartProvider>
      <SafeAreaView style={styles.container}>
        <Header
          centerComponent={{ text: 'Shopping', style: styles.headerCenterText }}
          rightComponent={<Cart />}
        />

        <ScrollView style={styles.scrollElement}>
          <ProductList data={DATA_PRODUCTS} />
        </ScrollView>

        <StatusBar style="auto" />
      </SafeAreaView>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenterText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollElement: {
    width: '100%',
  }
});
