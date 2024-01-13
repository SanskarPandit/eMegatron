import { React, useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    ScrollView,
    Button,
    TouchableOpacity,
    Image,
    StyleSheet
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import styles from "./Profile.style";
import { SIZES, icons } from "../../constants";
import firestore from '@react-native-firebase/firestore';
import PhoneInput from "react-native-phone-number-input";
import { Dropdown } from "react-native-element-dropdown";

const Profile = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [profile, setProfile] = useState()
    const data = ["Male", "Female"]
    const getData = async () => {
        const profileCollection = await firestore().collection('profile').get()
        // console.log(profileCollection.docs[0].data())
        setProfile(profileCollection.docs[0].data())
        console.log(profile)
    }
    useEffect(() => { getData() }, [])
    return (
        <ScrollView>
            <View style={styles.body}>
                <View style={{ display: 'flex', flexDirection: "row", alignContent: "space-between" }}>

                    <Ionic
                        name="ios-arrow-back"
                        size={30}
                        onPress={() => navigation.navigate("Home")}

                    />
                    <Text style={styles.welcomeMessage}>Profile</Text>
                </View>
                <View>
                </View>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{ uri: profile.imageURL }} style={{ width: 110, height: 110, borderRadius: 100, borderColor: "#167F71", borderWidth: 4 }} />
                    </View>
                    <View style={{ marginTop: SIZES.medium }}>
                        <View style={styles.searchContainer}>
                            <View style={styles.searchWrapper}>

                                <TextInput
                                    style={styles.searchInput}
                                    value=""
                                    onChange={() => { }}
                                    placeholder="Full Name"
                                />
                            </View>

                        </View>
                        <View style={styles.searchContainer}>
                            <View style={styles.searchWrapper}>

                                <TextInput
                                    style={styles.searchInput}
                                    value=""
                                    onChange={() => { }}
                                    placeholder="Location"
                                />
                            </View>

                        </View>
                        <View style={styles.searchContainer}>
                            <View style={styles.searchWrapper}>
                                <Image
                                    source={icons.Calendar}
                                    resizeMode="contain"
                                    style={styles.searchBtnImage}
                                />
                                <TextInput
                                    style={styles.dateOfBirth}
                                    value=""
                                    onChange={() => { }}
                                    placeholder="Date Of Birth"

                                />
                            </View>

                        </View>
                        <View style={styles.searchContainer}>
                            <View style={styles.searchWrapper}>
                                <Image
                                    source={icons.Email}
                                    resizeMode="contain"
                                    style={styles.searchBtnImage}
                                />
                                <TextInput
                                    style={styles.dateOfBirth}
                                    value=""
                                    onChange={() => { }}
                                    placeholder="Email"

                                />
                            </View>

                        </View>
                        <View style={styles.searchContainer}>
                            <View style={styles.phoneInput}>
                                <PhoneInput
                                    defaultValue={phoneNumber}
                                    containerStyle={{
                                        backgroundColor: "#fff",
                                        borderRadius: SIZES.medium,
                                        width: "96%",
                                        marginRight: SIZES.medium
                                    }}
                                    codeTextStyle={styles.phoneInputWrapper}
                                    textContainerStyle={styles.phoneInputWrapper}
                                />
                            </View>
                        </View>
                        <View style={styles.searchContainer}>
                            <View style={styles.searchWrapper}>

                                <TextInput
                                    style={styles.searchInput}
                                    value=""
                                    onChange={() => { }}
                                    placeholder="Gender"
                                />
                            </View>

                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchWrapper}>

                            <TextInput
                                style={styles.searchInput}
                                value=""
                                onChange={() => { }}
                                placeholder="Student"
                            />
                        </View>

                    </View>
                    <View style={{ height: 100 }} >
                        <TouchableOpacity style={styles.filterBtn} onPress={() => navigation.navigate("Home")}>

                            <Text style={styles.updateText}>Update</Text>
                            <Image
                                source={icons.Circle}
                                resizeMode="contain"
                                style={styles.filterBtnImage}
                            />

                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            {/* <View style={styles.searchContainer}>

                    <TouchableOpacity style={styles.filterBtn} onPress={() => { }}>
                        <Text>Update</Text>
                        <Image
                            source={icons.filter}
                            resizeMode="contain"
                            style={styles.filterBtnImage}
                        />
                    </TouchableOpacity>
                </View> */}

        </ScrollView >
    );
};

export default Profile;
