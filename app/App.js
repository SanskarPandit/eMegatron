import { React, useEffect } from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { CourseSearch, Courses, JobSearch, Jobs, Welcome } from "../components";
import Profile from "../components/profile/Profile";
import SignUp from "../components/signUp/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CourseFilter from "../components/home/courseFilter/CourseFilter";
import JobFilter from "../components/home/jobFilter/JobFilter";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CourseFilter" component={CourseFilter} />
        <Stack.Screen name="JobFilter" component={JobFilter} />
        <Stack.Screen name="CourseSearch" component={CourseSearch} />
        <Stack.Screen name="JobSearch" component={JobSearch} />
        <Stack.Screen name="My Courses" component={Courses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
