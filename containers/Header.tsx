import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../components/Text";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: colors.foreGround,
    marginBottom: 2.5,
    height: 60
  },
  Headline: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    marginTop: "auto",
    marginBottom: "auto"
  }
});

const Header = () => {
  return (
    <View style={styles.Wrapper}>
      <Text style={styles.Headline}>Pros 'N Cons</Text>
    </View>
  );
};

export default Header;
