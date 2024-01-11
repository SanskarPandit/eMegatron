import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../../cards/courses/CoursesCards.style"
import { AirbnbRating } from 'react-native-ratings';

const JobsCards = ({ item }) => {
  return (
    <View >
      <TouchableOpacity style={[styles.container, styles.card]} onPress={() => { }}>
        <Image source={{ uri: item.imageURL }} style={styles.cardImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.courseName}>{item.title}</Text>
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
            <Text style={styles.companyName}>{item.students} Std</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default JobsCards;
