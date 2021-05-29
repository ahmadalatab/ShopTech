import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  NavigationContainer
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "./CartComponent";
import Order from "./OrderComponent";
import PastOrders from "./PastOrderComponent";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
};

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Place Order" component={Order} />
    </Stack.Navigator>
  );
};

const PastOrdersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Past Orders" component={PastOrders} />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: "#694fad" }} shifting={false}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" type="font-awesome" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="shopping-cart" type="font-awesome" color={color} />
            ),
            tabBarBadge: 1,
          }}
        />
        <Tab.Screen
          name="Past Orders"
          component={PastOrdersStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="history" type="font-awesome" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="user" type="font-awesome" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
