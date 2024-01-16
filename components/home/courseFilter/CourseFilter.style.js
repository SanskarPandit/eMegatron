import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  body: { padding: SIZES.small, backgroundColor: "#FCF4F5" },
  iconPadding: { paddingTop: 0.3 },
  container: {
    marginTop: SIZES.large,
    width: "100%",
    height: "100%",
  },
  description: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: "#fff",
  },

  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large - 1,
    color: COLORS.gray2,
    marginTop: SIZES.xSmall,
  },
  welcomeText: {
    fontSize: 15,
    marginTop: 9,
    color: "#545454",
    fontFamily: FONT.medium,
  },
  welcomeMessage: {
    color: "#202244",
    fontFamily: FONT.bold,
    fontSize: 30,
    marginTop: 2,
    marginLeft: SIZES.small,
    width: "75%",
  },
  category: {
    color: "#202244",
    fontFamily: FONT.bold,
    fontSize: SIZES.large + 2,
    marginTop: 2,
    marginLeft: SIZES.xSmall - 3,
    marginBottom: SIZES.small,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.xLarge,
    height: 56,
    paddingHorizontal: SIZES.xLarge,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "white",
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontSize: SIZES.medium,
    flex: 1,
    fontFamily: FONT.medium,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.large,
    alignItems: "center",
    left: "2%",
  },
  dateOfBirth: {
    fontSize: SIZES.medium,
    flex: 1,
    fontFamily: FONT.medium,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.xxLarge,
    bottom: "20%",
    left: "3%",
  },
  phoneInput: {
    fontSize: SIZES.medium,
    flex: 1,
    fontFamily: FONT.medium,
    width: "100%",
    height: "100%",

    alignItems: "center",
    left: "2%",
    right: "2%",
  },
  searchBtnImage: {
    width: "45%",
    height: "45%",
    right: "44%",
    top: "30%",
    resizeMode: "contain",
  },

  filterBtnImage: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    left: "30%",
    bottom: SIZES.small,
  },

  phoneInputWrapper: {
    backgroundColor: "#fff",
    borderRadius: SIZES.medium,
  },
  dropdown: {
    margin: 16,
    height: 50,

    backgroundColor: "#fff",
    borderRadius: 15,
  },
  icon: {
    marginRight: 5,
    backgroundColor: "#fff",
  },
  placeholderStyle: {
    color: "#000",
    fontSize: 16,
    backgroundColor: "#fff",
  },
  selectedTextStyle: {
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  iconStyle: {
    width: 20,
    height: 20,
    right: 20,
  },
  inputSearchStyle: {
    height: 50,
    fontSize: 16,
    backgroundColor: "#fff",
  },

  filterBtn: {
    width: "80%",
    backgroundColor: "#EF383D",
    borderRadius: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.xxLarge,
    marginHorizontal: SIZES.xxLarge,
  },
  updateText: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.white,
    // marginTop: 10,
    top: SIZES.medium,
  },
});

export default styles;
