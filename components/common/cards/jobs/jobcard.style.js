import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONT } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    left: SIZES.medium,
    top: SIZES.medium,
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: "#202244",
  },
  infoContainer: {
    // marginTop: SIZES.xSmall,
    padding: SIZES.small,
    marginHorizontal: SIZES.xSmall - 4,
  },
  courseName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: "#FF6B00",
    marginBottom: SIZES.small,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  price: {
    fontSize: SIZES.large - 2,
    fontFamily: FONT.bold,
    color: "#EF383D",
  },
  location: {
    fontSize: SIZES.large + 5,
    fontFamily: FONT.bold,
    color: "#202244",
    marginBottom: SIZES.small,
  },
  card: {
    minHeight: 280,
    maxHeight: 275,
    minWidth: 250,
    margin: 15,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: SIZES.xLarge,
    maxWidth: 250,
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#000",
  },
  cardElevated: {
    elevation: 9,
    shadowOffset: { width: 1, height: 2 },
  },
  cardTitle: {
    color: "#FF6B00",
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  partition: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: "#202244",
    paddingHorizontal: SIZES.xSmall,
  },
});

export default styles;
