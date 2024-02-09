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
import jobStyle from "../jobs/jobs.style"
import CourseCard from "../../common/cards/courses/CoursesCard";

import firestore from '@react-native-firebase/firestore';
import JobsCards from "../../common/cards/jobs/JobsCards";
import { useNavigation } from "@react-navigation/native";

const Welcome = ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [activeCourse, setActiveCourse] = useState(0);
    const [activeJob, setActiveJob] = useState(1);
    const courseType = [
        "All",
        "Integrated Security",
        "CCTV Installing",
        "Fire Alarm",
    ];
    const jobType = ["All", "Building Contrator", "CCTV Engineer", "Civil Contractor"];
    const [job, setJob] = useState([]);
    const [activeJobType, setActiveJobType] = useState("All");
    const [course, setCourse] = useState();
    const [activeCourseType, setActiveCourseType] = useState("All");
    // const router = useRouter();
    const navigator = useNavigation()

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
    const handleCoursePress = (itemID) => {
        navigator.navigate()
    }
    return (
        <ScrollView >
            {activeCourse == 0 ? (
                <View style={styles.body}>
                    <View style={styles.container}>
                        <Text style={styles.welcomeMessage}>Hi, Arjun A. Vyas</Text>
                        <Text style={styles.welcomeText}>
                            What would you like to learn Today?
                        </Text>
                        {/* <Text style={styles.welcomeText}>Search Below !</Text> */}
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
                                onPressIn={() => { navigation.navigate("CourseSearch") }}
                                placeholder="What are you looking for?"
                            />
                        </View>
                        <TouchableOpacity style={styles.filterBtn} onPress={() => { navigation.navigate('CourseFilter') }}>
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

                            <View style={styles.header}>
                                <Text style={styles.heading}>Popular Courses</Text>
                                <TouchableOpacity style={{}} onPress={() => navigation.navigate("My Courses")} >
                                    <Text style={styles.headerBtn}>SEE ALL {">"}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View>
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

                                    contentContainerStyle={{ columnGap: SIZES.xSmall }}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>
                        <View>
                            <FlatList data={course}
                                renderItem={({ item }) => (
                                    <CourseCard item={item} />
                                )}
                                showsHorizontalScrollIndicator={false}
                                horizontal
                            />
                        </View>
                    </View>
                </View>

            ) : ("")}
            {/* Jobs Section */}


            {activeJob == 0 ? (
                <View style={jobStyle.body}>
                    <View style={jobStyle.container}>
                        <Text style={jobStyle.welcomeMessage}>Hi, Arjun A. Vyas</Text>
                        <Text style={jobStyle.welcomeText}>
                            Find Your Great Job..!
                        </Text>

                    </View>

                    <View style={jobStyle.searchContainer}>
                        <View style={jobStyle.searchWrapper}>
                            <Image
                                source={icons.search}
                                resizeMode="contain"
                                style={jobStyle.searchBtnImage}
                            />
                            <TextInput
                                style={jobStyle.searchInput}
                                value=""
                                onChange={() => { }}
                                placeholder="Position, Location or Keywords"
                                onPressIn={() => { navigation.navigate("JobSearch") }}
                            />
                        </View>
                        <TouchableOpacity style={jobStyle.filterBtn} onPress={() => { navigation.navigate('JobFilter') }}>
                            <Image
                                source={icons.filter}
                                resizeMode="contain"
                                style={jobStyle.filterBtnImage}

                            />
                        </TouchableOpacity>
                    </View>

                    <View style={jobStyle.offerCard}>
                        <Text style={jobStyle.cardTxt}>25% OFF*</Text>
                        <Text style={jobStyle.cardHeading}>Today's Special</Text>
                        <Text style={jobStyle.description}>Get a Discount for Every</Text>
                        <Text style={jobStyle.description}>Course Order only Valid for</Text>
                        <Text style={jobStyle.description}>Today..!</Text>
                        <View style={styles.cardSlider}></View>
                    </View>


                    <View style={jobStyle.menuSection}>
                        <View style={jobStyle.menuTabsContainer}>
                            <TouchableOpacity
                                style={jobStyle.menutab(activeCourse)}
                                onPress={() => {
                                    setActiveCourse(0);
                                    setActiveJob(1);
                                }}
                            >
                                <Text style={jobStyle.menutabText(activeCourse)}>Courses</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={jobStyle.menutab(activeJob)}
                                onPress={() => {
                                    setActiveJob(0);
                                    setActiveCourse(1);
                                }}
                            >
                                <Text style={jobStyle.menutabText(activeJob)}>Jobs</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: SIZES.large }}>

                            <View style={jobStyle.header}>
                                <Text style={jobStyle.heading}>Recommended For You</Text>
                                <TouchableOpacity style={{}} onPress={() => navigation.navigate("Jobs")} >
                                    <Text style={jobStyle.headerBtn}>SEE ALL {">"}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View>
                            <View style={jobStyle.tabsContainer}>
                                <FlatList
                                    data={jobType}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={jobStyle.tab(activeCourseType, item)}
                                            onPress={() => {
                                                setActiveCourseType(item);
                                            }}
                                        >
                                            <Text style={jobStyle.tabText(activeCourseType, item)}>
                                                {item}
                                            </Text>
                                        </TouchableOpacity>
                                    )}

                                    contentContainerStyle={{ columnGap: SIZES.xSmall }}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>
                        <View>
                            <FlatList data={job}
                                renderItem={({ item }) => (
                                    <JobsCards item={item} />
                                )}
                                showsHorizontalScrollIndicator={false}
                                horizontal

                            />
                        </View>
                    </View>
                </View>
            ) : ("")}
        </ScrollView>

    );
};

export default Welcome 