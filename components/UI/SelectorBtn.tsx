import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import Text from "./Text";
import colors from "../../constants/colors";

interface Props {
  selectedColor: string;
  selected: boolean;
  text: string;
  clicked: Function;
}

const SelectorBtn = (props: Props) => {
  const styles = StyleSheet.create({
    Selector: {
      backgroundColor: colors.button,
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
        : colors.darkOpacity
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
