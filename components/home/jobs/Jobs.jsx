import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ActivityIndicator, FlatList, ScrollView, StyleSheet } from 'react-native'

// import styles from './Courses.style'
import styles from "./jobs.style";
import { COLORS, icons, SIZES, FONT } from "../../../constants";
import CourseCard from "../../common/cards/courses/CoursesCard";
import JobsCards from "../../common/cards/jobs/JobsCards"
import firestore from '@react-native-firebase/firestore';
// import jobstyle from "../../common/cards/jobs/jobcard.style"
import Ionic from "react-native-vector-icons/Ionicons";
import { AirbnbRating } from 'react-native-ratings';
const Jobs = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [job, setJob] = useState([]);
  const [activeCourseType, setActiveCourseType] = useState("All");
  useEffect(() => {
    const subscriber = firestore()
      .collection('job_cards')
      .onSnapshot(querySnapshot => {
        const job = [];

        querySnapshot.forEach(documentSnapshot => {
          job.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setJob(job);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <ScrollView>
      <View style={{
        padding: SIZES.medium, backgroundColor: "#F2F8FF", display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <View style={styles.container}>
          <View style={{ display: 'flex', flexDirection: "row", alignContent: "space-between" }}>

            <Ionic
              name="ios-arrow-back"
              size={30}
              onPress={() => navigation.navigate("Home")}
            />
            <Text style={styles.welcomeMessage}>Jobs</Text>
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
              <Image
                source={icons.search}
                resizeMode="contain"
                style={styles.searchBtnImage}
              />
              <TextInput
                style={styles.searchInput}
                value=""
                onChange={() => { }}
                placeholder="What are you looking for?"
              />
            </View>
            <TouchableOpacity style={styles.filterBtn} onPress={() => { }}>
              <Image
                source={icons.filter}
                resizeMode="contain"
                style={styles.filterBtnImage}

              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList data={job}
          renderItem={({ item }) => (
            <JobsCards item={item} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>

  )
}


export default Jobs