import React from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ActivityIndicator, FlatList, ScrollView, SafeAreaView, Button } from 'react-native'

import { COLORS, icons, SIZES } from "../../../constants";
import Ionic from "react-native-vector-icons/Ionicons";
import CheckBox from 'react-native-bouncy-checkbox';
import styles from './CourseFilter.style'
const CourseFilter = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.body}>
                <View style={styles.container}>
                    <View style={{ display: 'flex', flexDirection: "row", marginBottom: SIZES.small }}>
                        <Ionic
                            name="ios-arrow-back"
                            size={30}
                            onPress={() => navigation.navigate("Home")}

                        />
                        <Text style={styles.welcomeMessage}>Filter</Text>
                        <View style={{ display: "flex", justifyContent: "center", }}>
                            <TouchableOpacity><Text style={styles.userName}>Clear</Text></TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={styles.category}>Subcategories:</Text>
                        <View style={{}}>

                            <CheckBox size={25}
                                fillColor="#167F71"
                                unfillColor="#FCF4F5"
                                text="Integrated Security and  Surveillance Systems"
                                iconStyle={{ borderColor: "#FCF4F5", }}
                                innerIconStyle={{
                                    borderWidth: 2,
                                    borderRadius: 8
                                }}
                                textStyle={{
                                    textDecorationLine: "none",
                                    paddingVertical: SIZES.small
                                }}
                            />
                            <CheckBox size={25}
                                fillColor="#167F71"
                                unfillColor="#FCF4F5"
                                text="Security and Surveillance Technology Fundamentals"
                                iconStyle={{ borderColor: "#FCF4F5", }}
                                innerIconStyle={{
                                    borderWidth: 2,
                                    borderRadius: 8
                                }}
                                textStyle={{
                                    textDecorationLine: "none",
                                    paddingVertical: SIZES.small
                                }}
                            />
                            <CheckBox size={25}
                                fillColor="#167F71"
                                unfillColor="#FCF4F5"
                                text="Fire Alarm Systems"
                                iconStyle={{ borderColor: "#FCF4F5", }}
                                innerIconStyle={{
                                    borderWidth: 2,
                                    borderRadius: 8
                                }}
                                textStyle={{
                                    textDecorationLine: "none",
                                    paddingVertical: SIZES.small
                                }}
                            />
                            <CheckBox size={25}
                                fillColor="#167F71"
                                unfillColor="#FCF4F5"
                                text="Advanced Surveillance Technologies"
                                iconStyle={{ borderColor: "#FCF4F5", }}
                                innerIconStyle={{
                                    borderWidth: 2,
                                    borderRadius: 8
                                }}
                                textStyle={{
                                    textDecorationLine: "none",
                                    paddingVertical: SIZES.small
                                }}
                            />
                            <CheckBox size={25}
                                fillColor="#167F71"
                                unfillColor="#FCF4F5"
                                text="Security Project Management"
                                iconStyle={{ borderColor: "#FCF4F5", }}
                                innerIconStyle={{
                                    borderWidth: 2,
                                    borderRadius: 8
                                }}
                                textStyle={{
                                    textDecorationLine: "none",
                                    paddingVertical: SIZES.small
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 24, marginTop: SIZES.xSmall }}>
                        <Text style={styles.category}>Levels:</Text>
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="All Levels"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="Beginners"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="Intermediate"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="Expert"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 24, marginTop: SIZES.xSmall }}>
                        <Text style={styles.category}>Prices:</Text>
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="Paid"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="Free"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 24, marginTop: SIZES.xSmall }}>
                        <Text style={styles.category}>Features:</Text>
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="All Captian"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="Quizzes"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="Coding Exercise"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="Practice Tests"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 24, marginTop: SIZES.xSmall }}>
                        <Text style={styles.category}>Ratings:</Text>
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="4.5 & Up Above"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="4.0 & Up Above"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="3.5 & Up Above"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="3.0 & Up Above"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 24, marginTop: SIZES.xSmall }}>
                        <Text style={styles.category}>Video Durations:</Text>
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="0-2 Hours"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="3-6 Hours"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="7-16 Hours"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"
                            text="17+ Hours"

                            iconStyle={{ borderColor: "#167F71", }}
                            innerIconStyle={{
                                borderWidth: 2,
                                borderRadius: 8
                            }}
                            textStyle={{
                                textDecorationLine: "none",
                                paddingVertical: SIZES.small
                            }}
                        />
                    </View>
                    <View style={{ height: 100 }} >
                        <TouchableOpacity style={styles.filterBtn} onPress={() => navigation.navigate("Home")}>

                            <Text style={styles.updateText}>Apply</Text>
                            <Image
                                source={icons.Circle}
                                resizeMode="contain"
                                style={styles.filterBtnImage}
                            />

                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default CourseFilter