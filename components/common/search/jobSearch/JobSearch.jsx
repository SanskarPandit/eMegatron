import { React, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    ScrollView,
    Button,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList,
} from "react-native";
import styles from "./JobSearch.style";
import Ionic from "react-native-vector-icons/Ionicons";
import { SIZES, icons } from "../../../../constants";
const JobSearch = ({ navigation }) => {
    const [lists, setLists] = useState([
        { name: "Building Contractor", id: 1, isVisible: true, },
        { name: "CCTV Engineer", id: 2, isVisible: true },
        { name: "Civil Contractor", id: 3, isVisible: true },
        { name: "Architect", id: 4, isVisible: true },
        { name: "Interior Designer", id: 5, isVisible: true },
        { name: "Site Engineer ", id: 6, isVisible: true },
        { name: "General Contractor", id: 7, isVisible: true },
        { name: "Others", id: 8, isVisible: true },
        { name: "HR Management", id: 9, isVisible: true },

    ]);
    // const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = (itemId) => {
        setLists((prevData) =>
            prevData.map((item) =>
                item.id === itemId ? { ...item, isVisible: !item.isVisible } : item
            )
        );
    };
    return (
        <ScrollView style={styles.body}>
            <View >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "space-between",
                    }}
                >
                    <Ionic
                        name="ios-arrow-back"
                        size={30}
                        onPress={() => navigation.navigate("Home")}
                    />
                    <Text style={styles.welcomeMessage}>Search</Text>
                </View>
                <View style={styles.searchContainer}>
                    <View style={styles.searchWrapper}>
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={styles.searchBtnImage}
                        />
                        <TextInput style={styles.searchInput} placeholder="Search for...." />
                        {/* <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={styles.newsearchBtnImage}
                        /> */}
                    </View>
                </View>
                <View style={styles.header}>
                    <Text style={styles.userName}>Recent Search</Text>
                    <TouchableOpacity>
                        <Text style={styles.headerBtn}>SEE ALL {">"}</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={lists}
                    keyExtractor={lists.id}
                    renderItem={({ item }) => (
                        <View >
                            {item.isVisible && (
                                <View style={{
                                    width: "100%", display: "flex",
                                    flexDirection: "row",
                                }}>
                                    <View style={styles.listBody}>
                                        <Text style={styles.welcomeText}>{item.name}</Text>
                                    </View>

                                    <View style={{ display: "flex", alignItems: "center", marginTop: 45 }}>
                                        <View style={styles.iconBody}>
                                            <Ionic
                                                name="close-outline"
                                                onPress={() => { }}
                                                style={styles.icon}
                                                onPressIn={() => { toggleVisibility(item.id) }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            )}
                        </View>
                    )}
                />
            </View>
        </ScrollView >
    );
};

export default JobSearch;
