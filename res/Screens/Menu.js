import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


const Menu = ({ navigation }) => {
  const menuOptions = [
    { title: 'Car Rescue', image: require('../assets/Car.jpg'), screen: 'CarRescue' },
    { title: 'Fuel Sharing', image: require('../assets/fuel.jpg'), screen: 'FuelSharing' },
    { title: 'Contact Mechanic', image: require('../assets/Mechanic.png'), screen: 'ContactMechanic' },
    { title: 'Points & Payments', image: require('../assets/points.jpg'), screen: 'Points' },
  ];

  return (
    <View style={styles.container}>
      {menuOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuOption}
          onPress={() => navigation.navigate(option.screen)}
        >
          <Image source={option.image} style={styles.image} />
          <Text style={styles.title}>{option.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    elevation: 3,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 300, // Set a fixed width for uniformity
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Menu;
