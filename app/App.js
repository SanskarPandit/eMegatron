import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { CourseSearch, Courses, JobSearch, Jobs, Welcome } from "../components";
import Profile from "../components/profile/Profile";
import SignUp from "../components/signUp/SignUp";
import Filter from "../components/home/filter/Filter";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="CourseSearch" component={CourseSearch} />
        <Stack.Screen name="JobSearch" component={JobSearch} />

        <Stack.Screen name="My Courses" component={Courses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
