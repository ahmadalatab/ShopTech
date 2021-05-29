import React from "react";
import { Image } from "react-native-elements";
import { ScrollView, Text, StyleSheet, Button, View } from "react-native";

const Cart = ({navigation}) => {
  return (
    <ScrollView>
        <View style={styles.placeOrderBtn}>
          <Button title="Place Order" color="#841584" onPress={() => navigation.navigate('Place Order')} />
        </View>
        <View style={styles.cardRow}>
          <View>
            <Image
                style={{ width: 100, height: 100, borderWidth: 1 }}
            />
          </View>
          <View style={{ paddingLeft: 10 }}>
            <Text style={[styles.text, styles.productName]}>Product Name</Text>
            <Text style={styles.text}>$100</Text>
            <Text style={styles.text}>Quantity</Text>
          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardRow: {
    display: 'flex',
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,
    margin: 15
  },
  placeOrderBtn: {
    textTransform: 'capitalize',
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'flex-end',
  },
  text: {
    paddingBottom: 8,
    fontSize: 18
  },
  productName: {
    fontWeight: 'bold'
  }
});

export default Cart;
