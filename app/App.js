import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Courses, Jobs, Welcome } from "../components";
import Profile from "../components/profile/Profile";
import SignUp from "../components/signUp/SignUp";
import Filter from "../components/home/filter/Filter";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
