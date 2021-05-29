import React, { useState } from "react";
import { ScrollView, StyleSheet, View, TextInput, Button } from "react-native";
import { Text, CheckBox } from "react-native-elements";

const Order = () => {

  const [checked, setChecked] = useState(true);

  return (
    <ScrollView>
      <View style={styles.cardRow}>
        <Text h4>Basic Info</Text>
        <View style={styles.infoView}>
          <View style={styles.inputView}>
            <TextInput placeholder="First Name" style={styles.input} />
            <TextInput placeholder="Last Name" style={styles.input} />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              style={[styles.input, styles.fullWidthInput]}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Street Address"
              style={[styles.input, styles.fullWidthInput]}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Zip Code"
              keyboardType="numeric"
              style={styles.input}
            />
            <TextInput placeholder="State" style={styles.input} />
          </View>
        </View>

        <Text h4>Payment Info</Text>
        <View style={styles.infoView}>
          <View style={styles.inputView}>
            <CheckBox
              title='Make this my default payment'
              containerStyle ={styles.checkboxContainer}
              textStyle={styles.checkboxText}
              checked={checked}
              onPress={() => setChecked(!checked)}
              disableRipple
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Card Number"
              style={[styles.input, styles.fullWidthInput]}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput placeholder="Expiration Date" style={styles.input} />
            <TextInput
              placeholder="CVC"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        </View>

        <Button
            title="Submit"
            color="#841584"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardRow: {
    padding: 20,
  },
  infoView: {
    marginBottom: 15,
  },
  inputView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "lightgrey",
    paddingLeft: 7,
    width: "48%",
    marginVertical: 7,
    paddingVertical: 5,
    fontSize: 18,
    backgroundColor: "white",
  },
  fullWidthInput: {
    width: "100%",
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
     
  },
  checkboxText: {
    fontWeight: 'normal',
    fontSize: 18
  }
});

export default Order;
