import React from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
};

const imageMap = {
  'camisa_santos.jpg': require('../assets/images/camisa_santos.jpg'),
  'bermuda_santos.jpg': require('../assets/images/bermuda_santos.jpg'),
  'bone_santos.jpg': require('../assets/images/bone_santos.png'),
  'chuteira_santos.jpg': require('../assets/images/chuteira_santos.jpg'),
  'caneca_santos.jpg': require('../assets/images/caneca_santos.jpg'),
  'luva_santos.jpg': require('../assets/images/luva_santos.jpg'),
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  const handleBuy = () => {
    Alert.alert('Compra realizada', `Produto ${name} comprado!`);
  };

  return (
    <View style={styles.card}>
      <Image source={imageMap[image]} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
      <Button title="Comprar" onPress={handleBuy} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
});

export default ProductCard;
