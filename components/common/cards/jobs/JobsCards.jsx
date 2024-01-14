import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../../cards/jobs/jobcard.style"
import { AirbnbRating } from 'react-native-ratings';
import { SIZES, icons } from "../../../../constants";

const JobsCards = ({ item }) => {
  return (
    <View >
      <TouchableOpacity style={[styles.container, styles.card]} onPress={() => { }}>
        <View style={{ backgroundColor: "black", height: SIZES.xxLarge * 5, borderTopRightRadius: SIZES.xLarge, borderTopLeftRadius: SIZES.xLarge }}>

          <Image source={{ uri: item.imageURL }} style={styles.logoContainer} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.courseName}>{item.title}</Text>
          <Text style={styles.location}>{item.place}</Text>

          <View style={styles.infoWrapper}>
            <Text style={styles.price}>₹{item.price}</Text>
            <Text style={styles.partition}>|</Text>
            <AirbnbRating
              count={1}
              size={15}
              showRating={false}
            />
            <Text style={styles.companyName}>{item.rating}</Text>
            <Text style={styles.partition}>|</Text>
            <Text style={styles.companyName}>{item.duration} Yrs</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default JobsCards;
