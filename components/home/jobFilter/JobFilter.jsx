import React from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ActivityIndicator, FlatList, ScrollView, SafeAreaView, Button } from 'react-native'

import { COLORS, icons, SIZES } from "../../../constants";
import Ionic from "react-native-vector-icons/Ionicons";
import CheckBox from 'react-native-bouncy-checkbox';
import styles from './JobFilter.style'

const JobFilter = ({ navigation }) => {
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
                        <Text style={styles.category}>Work Mode:</Text>
                        <View style={{}}>

                            <CheckBox size={25}
                                fillColor="#167F71"
                                unfillColor="#F2F8FF"
                                text="Work from office"
                                iconStyle={{ borderColor: "#F2F8FF", }}
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
                                unfillColor="#F2F8FF"
                                text="Remote"
                                iconStyle={{ borderColor: "#F2F8FF", }}
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
                                unfillColor="#F2F8FF"
                                text="Hybrid"
                                iconStyle={{ borderColor: "#F2F8FF", }}
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
                                unfillColor="#F2F8FF"
                                text="Temp. WFM due to covid"
                                iconStyle={{ borderColor: "#F2F8FF", }}
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
                        <Text style={styles.category}>Location:</Text>
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#F2F8FF"
                            text="Pune"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="Mumbai"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="New Delhi"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="Chennai"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="Surat"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="Noida"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                        <Text style={styles.category}>Education:</Text>
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#F2F8FF"
                            text="Paid"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="Free"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="Work from office"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="Remote"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="Hybrid"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="Temp. WFM due to covid"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                        <Text style={styles.category}>Experience:</Text>
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#F2F8FF"
                            text="1-3 Yrs"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="3-6 Yrs"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="6-9 Yrs"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="9-11 Yrs"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                        <Text style={styles.category}>Salary:</Text>
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#F2F8FF"
                            text="1-3 Lakhs"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="4-6Lakhs"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="7-9 Lakhs"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="10-13 Lakhs"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                        <Text style={styles.category}>Department:</Text>
                        <CheckBox size={25}
                            fillColor="#167F71"
                            unfillColor="#F2F8FF"
                            text="Architecture"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="Engineering & Software"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="IT"
                            iconStyle={{ borderColor: "#F2F8FF", }}
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
                            unfillColor="#F2F8FF"
                            text="Contractor"

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

export default JobFilter