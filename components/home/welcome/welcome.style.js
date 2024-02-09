import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  body: {
    padding: SIZES.medium,
    backgroundColor: "#FCF4F5",
  },
  iconPadding: { paddingTop: 0.3 },
  container: {
    marginTop: SIZES.small,
  },
  description: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: "#fff",
  },

  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
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
    // paddingLeft: SIZES.small,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
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
    paddingHorizontal: SIZES.xxLarge,
    bottom: "20%",
    left: "3%",
  },
  filterBtn: {
    width: 45,
    height: "80%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "45%",
    height: "45%",
    right: "44%",
    top: "30%",
  },
  offerCard: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "#EF383D",
    padding: 5,
    borderRadius: 20,
    width: "80%",
    marginLeft: "10%",
  },
  cardHeading: {
    fontFamily: FONT.bold,
    fontSize: 25,
    color: COLORS.white,
    marginTop: 2,
    marginBottom: 12,
  },
  cardTxt: {
    fontFamily: FONT.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 2,
  },
  filterBtnImage: {
    width: 30,
    height: 30,
    tintColor: COLORS.white,
  },
  cardSlider: {
    flexDirection: "row",
    marginTop: SIZES.xLarge,
    height: 10,
    backgroundColor: "#FAC840",
    width: 20,
    borderRadius: 5,
    marginBottom: 5,
  },
  menuTabsContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: SIZES.medium,
    flexDirection: "row",
  },
  menuSection: {
    marginTop: SIZES.xxLarge,
    marginBottom: SIZES.large,
    backgroundColor: "#ffff",
    padding: SIZES.xLarge,
    borderRadius: SIZES.medium,
    width: "100%",
    paddingTop: 0.5,
  },
  menutab: (activeStatus) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.xxLarge,
    borderRadius: 10,
    borderBottomWidth: activeStatus === 0 ? 1 : 0,
    borderColor: activeStatus === 0 ? "#167F71" : COLORS.gray2,
  }),
  menutabText: (activeStatus) => ({
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: activeStatus === 0 ? "#167F71" : COLORS.gray2,
  }),

  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    backgroundColor: activeJobType === item ? "#167F71" : "#FCF4F5",
    borderColor: activeJobType === item ? "#167F71" : "#FCF4F5",
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? "#FFFFFF" : "#000",
  }),
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: 15,
    fontFamily: FONT.medium,
    color: "#EF383D",
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
  heading: {
    fontSize: 20,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
});

export default styles;
