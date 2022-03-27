import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, FlatList} from 'react-native';
import products from './data/products';
import ProductCard from './components/ProductCard';
import styles from './App.style';

const App = () => {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));

  const renderProduct = ({item}) => <ProductCard product={item} />;
  const flatListKey = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKA STORE</Text>
      <TextInput style={styles.input} onChangeText={(e) => setSearch(e)} placeholder='Ara..' />
      <FlatList numColumns={2} keyExtractor={flatListKey} data={filteredProducts} renderItem={renderProduct} />
    </View>
  );
};

export default App;