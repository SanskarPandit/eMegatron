import { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    FlatList,
    ActivityIndicator,
    ScrollView,

} from "react-native";
// import useRouter from "expo-router";
import styles from "./welcome.style";
import { COLORS, icons, SIZES } from "../../../constants";
import Jobs from "../jobs/jobs.style";
import CourseCard from "../../common/cards/courses/CoursesCard";
import firestore from '@react-native-firebase/firestore';
const Welcome = () => {
    const [loading, setLoading] = useState(true)
    const [activeCourse, setActiveCourse] = useState(0);
    const [activeJob, setActiveJob] = useState(1);
    const courseType = [
        "All",
        "Integrated Security",
        "CCTV Installing",
        "Fire Alarm",
    ];
    const [course, setCourse] = useState([]);
    const [activeCourseType, setActiveCourseType] = useState("All");
    // const router = useRouter();
    useEffect(() => {
        const subscriber = firestore()
            .collection('course_cards')
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

        <ScrollView>
            <View style={{ padding: SIZES.medium, backgroundColor: "#FCF4F5" }}>
                <View style={styles.container}>
                    <Text style={styles.welcomeMessage}>Hi, Arjun A. Vyas</Text>
                    <Text style={styles.welcomeText}>
                        What would you like to learn Today?
                    </Text>
                    <Text style={styles.welcomeText}>Search Below !</Text>
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

                <View style={styles.offerCard}>
                    <Text style={styles.cardTxt}>25% OFF*</Text>
                    <Text style={styles.cardHeading}>Today's Special</Text>
                    <Text style={styles.description}>Get a Discount for Every</Text>
                    <Text style={styles.description}>Course Order only Valid for</Text>
                    <Text style={styles.description}>Today..!</Text>
                    <View style={styles.cardSlider}></View>
                </View>
                <View style={styles.menuSection}>
                    <View style={styles.menuTabsContainer}>
                        <TouchableOpacity
                            style={styles.menutab(activeCourse)}
                            onPress={() => {
                                setActiveCourse(0);
                                setActiveJob(1);
                            }}
                        >
                            <Text style={styles.menutabText(activeCourse)}>Courses</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.menutab(activeJob)}
                            onPress={() => {
                                setActiveJob(0);
                                setActiveCourse(1);
                            }}
                        >
                            <Text style={styles.menutabText(activeJob)}>Jobs</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: SIZES.large }}>
                        {activeCourse == 0 ? (
                            <View style={Jobs.header}>
                                <Text style={Jobs.heading}>Popular Courses</Text>
                                <TouchableOpacity style={{}} >
                                    <Text style={Jobs.headerBtn}>SEE ALL {">"}</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            ""
                        )}
                        {activeJob == 0 ? (
                            <View>
                                <View style={Jobs.header}>
                                    <Text style={Jobs.heading}>Popular Jobs</Text>
                                    <TouchableOpacity>
                                        <Text style={Jobs.headerBtn}>SEE ALL {">"}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ) : (
                            ""
                        )}
                    </View>
                    <View>
                        {activeCourse == 0 ? (
                            <View style={styles.tabsContainer}>
                                <FlatList
                                    data={courseType}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={styles.tab(activeCourseType, item)}
                                            onPress={() => {
                                                setActiveCourseType(item);
                                            }}
                                        >
                                            <Text style={styles.tabText(activeCourseType, item)}>
                                                {item}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(item) => item}
                                    contentContainerStyle={{ columnGap: SIZES.xSmall }}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        ) : (
                            ""
                        )}
                    </View>
                    {/*  Course Cards   */}

                    <View>
                        {activeCourse == 0 ? (
                            <FlatList data={course}
                                renderItem={({ item }) => (
                                    <CourseCard item={item} />
                                )}
                                showsHorizontalScrollIndicator={false}
                                horizontal
                            />
                        ) : (
                            ""
                        )}
                    </View>

                    {/* <View>
          {activeJob == 0 ? (
            <View style={Jobs.cardsContainer}>
              {isLoading ? (
                <ActivityIndicator size="large" colors={COLORS.gray} />
              ) : error ? (
                <Text>Something went wrong :{"("}</Text>
                   ) : (
           <FlatList
                  data={[1, 2, 3, 4]}
                  renderItem={({ item }) => (
                    <JobsCards item={item} />
                  )}
                  keyExtractor={item => item?.job_id}
                  contentContainerStyle={{ columnGap: SIZES.medium }}
                  horizontal
                /> 
              )}
            </View>
          ) : ''}
        </View> */}

                </View>
            </View>
        </ScrollView>

    );
};

export default Welcome 