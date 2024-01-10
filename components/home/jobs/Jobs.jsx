import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ActivityIndicator, FlatList, ScrollView } from 'react-native'

// import styles from './Courses.style'
import styles from "./jobs.style";
import { COLORS, icons, SIZES } from "../../../constants";
import CourseCard from "../../common/cards/courses/CoursesCard";
import firestore from '@react-native-firebase/firestore';

const Jobs = () => {
  const [loading, setLoading] = useState(true)
  const [course, setCourse] = useState([]);
  const [activeCourseType, setActiveCourseType] = useState("All");
  useEffect(() => {
    const subscriber = firestore()
      .collection('jobs')
      .onSnapshot(querySnapshot => {
        const course = [];

        querySnapshot.forEach(documentSnapshot => {
          course.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setCourse(course);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={{ padding: SIZES.medium, backgroundColor: "#F2F8FF" }}>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Jobs</Text>

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


      <FlatList data={course}
        renderItem={({ item }) => (
          <CourseCard item={item} />
        )}
        showsVerticalScrollIndicator={false}
      />

    </View>

  )
}

export default Jobs