import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  text?: String;
  strength?: Number;
}

const Reason = (props: Props) => {
  const styles = StyleSheet.create({
    Wrapper: {
      backgroundColor: "rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: 6,
      marginBottom: 1,
      width: "98%",
      minHeight: 25,
      marginLeft: "auto",
      marginRight: "auto",
      borderWidth: 0.5
    },
    Text: {
      marginLeft: "2%",
      marginTop: "auto",
      marginBottom: "auto"
    },
    TextRight: {
      marginRight: "2%",
      marginTop: "auto",
      marginBottom: "auto"
    }
  });
  return (
    <View style={styles.Wrapper}>
      <Text style={styles.Text}>{props.text}</Text>
      <Text style={styles.TextRight}>{props.strength}</Text>
    </View>
  );
};

export default Reason;
