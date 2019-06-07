import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";

interface Props {
  selectedColor: string;
  selected: boolean;
  text: string;
  clicked: Function;
}

const SelectorBtn = (props: Props) => {
  const styles = StyleSheet.create({
    Selector: {
      backgroundColor: "rgba(0,0,0,0.1)",
      marginTop: 10,
      marginHorizontal: 10,
      padding: 5,
      borderRadius: 100,
      minWidth: 65,
      minHeight: 65,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    },
    Selected: {
      backgroundColor: props.selectedColor
        ? props.selectedColor
        : "rgba(0,0,0,0.3)"
    },
    Text: {
      marginTop: "auto",
      marginBottom: "auto",
      fontSize: 25,
      fontWeight: "bold"
    }
  });

  const proSelectStyle = [
    styles.Selector,
    props.selected ? styles.Selected : null
  ];
  return (
    <TouchableHighlight style={proSelectStyle} onPress={() => props.clicked()}>
      <Text style={styles.Text}>{props.text}</Text>
    </TouchableHighlight>
  );
};

export default SelectorBtn;
