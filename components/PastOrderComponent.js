import React from "react";
import { Image } from "react-native-elements";
import { ScrollView, Text, StyleSheet, Button, View } from "react-native";

const PastOrders = () => {
  return (
    <ScrollView>
        <View style={styles.cardRow}>
            <Text>Past Orders</Text>
          <View>
            <Image
                style={{ width: 125, height: 125, borderWidth: 1 }}
            />
          </View>
          <View style={{ padding: 10 }}>
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
  text: {
    paddingLeft: 8,
    paddingBottom: 8,
    fontSize: 18
  },
  productName: {
    fontWeight: 'bold'
  }
});

export default PastOrders;
