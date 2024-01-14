import React from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ActivityIndicator, FlatList, ScrollView, SafeAreaView, Button } from 'react-native'
import styles from './Filter.style'
import { COLORS, icons, SIZES } from "../../../constants";
import Ionic from "react-native-vector-icons/Ionicons";
import CheckBox from 'react-native-bouncy-checkbox';

const Filter = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.body}>
                <View style={styles.container}>
                    <View style={{ display: 'flex', flexDirection: "row", alignContent: "space-between" }}>
                        <Ionic
                            name="ios-arrow-back"
                            size={30}
                            onPress={() => navigation.navigate("Home")}

                        />
                        <Text style={styles.welcomeMessage}>Filter</Text>
                    </View>
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={styles.category}>Subcategories</Text>
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="Integrated Security and  Surveillance Systems"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#FCF4F5"

                            text="Security and Surveillance Technology Fundamentals"
                            iconStyle={{ borderColor: "#167F71" }}
                            innerIconStyle={{ borderWidth: 2, borderColor: "#B4BDC4" }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="Fire Alarm Systems"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="Advanced Surveillance Technologies"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="Security Project Management"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                    </View>

                    <View>
                        <Text style={styles.category}>Levels</Text>
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="All Levels"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="Beginners"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="Intermediate"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="Expert"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.category}>Prices</Text>
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="Paid"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="Free"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.category}>Features</Text>
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="All Captian"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="Quizzes"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="Coding Exercise"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="Practice Tests"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.category}>Rating</Text>
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="4.5 & Up Above"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="4.0 & Up Above"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="3.5 & Up Above"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="3.0 & Up Above"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.category}>Video Duration</Text>
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="0-2 Hours"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="3-6 Hours"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}
                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="7-16 Hours"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
                            }}

                        />
                        <CheckBox size={25}
                            fillColor="#B4BDC4"
                            unfillColor="#FFFFFF"
                            text="17+ Hours"
                            iconStyle={{ borderColor: "#FCF4F5", }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{
                                textDecorationLine: "none",
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

export default Filter