import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Text from "./Text";

interface Props {
  clicked: Function;
  text: string;
}

const Btn = (props: Props) => {
  const styles = StyleSheet.create({
    Container: {
      backgroundColor: "rgba(0,0,0,0.6)",
      minWidth: 50,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: 7
    },
    Text: {
      color: "rgba(255,255,255,0.4)",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: 20,
      fontWeight: "bold"
    }
  });
  return (
    <TouchableOpacity style={styles.Container} onPress={() => props.clicked()}>
      <Text style={styles.Text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
