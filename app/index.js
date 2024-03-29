import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { Welcome, Courses, Jobs, Filter } from "../components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "../styles/search";
import Profile from "../components/profile/Profile";

import App from "./App";

const home = "Home";
const myCourses = "My Courses";
const jobs = "Jobs";
const profile = "Profile";
const filter = "Filter";
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;
              let rn = route.name;
              if (rn === home) {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (rn === myCourses) {
                iconName = focused
                  ? "document-text-sharp"
                  : "document-text-outline";
              } else if (rn === jobs) {
                iconName = focused
                  ? "chatbubble-ellipses"
                  : "chatbubble-ellipses-outline";
              } else if (rn === profile) {
                iconName = focused ? "ios-person-sharp" : "ios-person-outline";
              }
              return (
                <Ionic
                  name={iconName}
                  size={23}
                  color={focused ? "#167F71" : color}
                />
              );
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "black",
            tabBarStyle: {
              backgroundColor: "#FCF4F5",
              paddingBottom: 2,
              paddingTop: 5,
              height: 50,
            },
            headerShadowVisible: false,
          })}
        >
          <Tab.Screen
            options={{
              headerShown: false,
            }}
            name={home}
            component={App}
          />
          <Tab.Screen
            options={{
              headerShown: false, // Set headerShown to false to hide the header for this screen
            }}
            name={myCourses}
            component={Courses}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarStyle: { backgroundColor: "#F2F8FF" }, // Set headerShown to false to hide the header for this screen
            }}
            name={jobs}
            component={Jobs}
          />
          <Tab.Screen
            options={{
              headerShown: false,
            }}
            name={profile}
            component={Profile}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default Home;
