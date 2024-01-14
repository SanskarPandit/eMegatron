import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  body: { padding: SIZES.large, backgroundColor: "#F2F8FF" },
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
    padding: SIZES.medium - 1,
    marginTop: SIZES.medium,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium + 1,
    color: COLORS.secondary,
  },
  welcomeText: {
    fontSize: 20,
    color: "#A0A4AB",
    fontFamily: FONT.medium,
  },
  welcomeMessage: {
    color: "#202244",
    fontFamily: FONT.bold,
    fontSize: 25,
    marginTop: 2,
    marginLeft: SIZES.small,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.xLarge,
    height: 50,
    paddingHorizontal: SIZES.large,
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
    paddingHorizontal: SIZES.xLarge,
    alignItems: "center",
    left: "3%",
    // paddingVertical: SIZES.small,
    marginBottom: SIZES.medium - 2,
  },
  searchBtnImage: {
    width: "45%",
    height: "45%",
    right: "45%",
    top: "30%",
    resizeMode: "contain",
  },
  newsearchBtnImage: {
    width: "45%",
    height: "45%",
    left: "45%",
    top: "30%",
    resizeMode: "contain",
  },

  icon: {
    display: "flex",
    fontSize: SIZES.medium,
    // left: "90%",
    bottom: SIZES.xxLarge,
    // width: "50%",
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

  updateText: {
    color: "white",
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.white,
    // marginTop: 10,
    // top: SIZES.medium,
  },
  listBody: {
    padding: SIZES.small,
    width: "90%",
    // marginHorizontal: SIZES.small,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerBtn: {
    fontSize: 15,
    fontFamily: FONT.medium,
    color: "#007AFF",
    marginTop: SIZES.medium,
  },
  iconBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
