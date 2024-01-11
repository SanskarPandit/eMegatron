import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    ScrollView,
    Button,
    TouchableOpacity,
    Image
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import styles from "../home/welcome/welcome.style";
import { icons } from "../../constants";
const Profile = ({ navigation }) => {
    return (
        <View style={styles.body}>
            <Ionic
                name="ios-arrow-back"
                size={30}
                onPress={() => navigation.navigate("Home")}
            />
            <View style={styles.searchContainer}>

                <TouchableOpacity style={styles.filterBtn} onPress={() => { }}>
                    <Text>Update</Text>
                    <Image
                        source={icons.filter}
                        resizeMode="contain"
                        style={styles.filterBtnImage}

                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Profile;
