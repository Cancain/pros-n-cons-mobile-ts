import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: "rgba(0,0,0,0.4)",
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
