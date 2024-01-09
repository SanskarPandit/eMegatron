import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
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
    tintColor: "#000",
    right: "44%",
    top: "30%",
  },
  JobOfferCard: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "#007AFF",
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
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
    flexDirection: "row",
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
  menuSection: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 39,
    backgroundColor: "#ffff",
    padding: 13,
    borderRadius: 20,
    width: "100%",
    paddingTop: 0.5,
  },
});

export default styles;
