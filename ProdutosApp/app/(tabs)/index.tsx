import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ProductCard from '../../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Camisa Santos',
    price: 149.99,
    image: 'camisa_santos.jpg',
  },
  {
    id: 2,
    name: 'Bermuda Santos',
    price: 89.99,
    image: 'bermuda_santos.jpg', 
  },
  {
    id: 3,
    name: 'Boné Santos',
    price: 59.99,
    image: 'bone_santos.jpg', 
  },
  {
    id: 4,
    name: 'Chuteira Santos',
    price: 249.99,
    image: 'chuteira_santos.jpg', 
  },
  {
    id: 5,
    name: 'Caneca Santos',
    price: 39.99,
    image: 'caneca_santos.jpg', 
  },
  {
    id: 6,
    name: 'Luva Santos',
    price: 129.99,
    image: 'luva_santos.jpg',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image} 
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
});
