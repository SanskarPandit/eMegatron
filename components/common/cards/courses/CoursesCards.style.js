import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: SIZES.xSmall,
    padding: SIZES.xSmall,
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
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
  card: {
    minHeight: 286,
    maxHeight: 280,
    minWidth: 250,
    margin: 15,

    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 8,
    maxWidth: 250,
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
