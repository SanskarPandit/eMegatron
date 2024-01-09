import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },

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
