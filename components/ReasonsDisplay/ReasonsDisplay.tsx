import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props {
  left?: boolean;
}

const ReasonsDisplay = (props: Props) => {
  const styles = StyleSheet.create({
    Container: {
      width: "48.5%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginLeft: props.left ? 0 : 2,
      marginRight: props.left ? 2 : 0,
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.3)",
      borderRadius: 7,
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    },
    LabelWrapper: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "space-between"
    },
    ReasonWrapper: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      borderRadius: 7,
      paddingHorizontal: 4,
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%"
    },
    TextWrapper: {
      maxWidth: "90%"
    }
  });
  return (
    <View style={styles.Container}>
      <View style={styles.LabelWrapper}>
        <Text style={{ marginLeft: "1.5%", fontWeight: "bold" }}>Reason</Text>
        <Text style={{ marginRight: "1.5%", fontWeight: "bold" }}>
          Strength
        </Text>
      </View>
      <View style={styles.ReasonWrapper}>
        <View style={styles.LabelWrapper}>
          <View style={styles.TextWrapper}>
            <Text>asdkmjnbasdkj</Text>
          </View>
          <Text>2</Text>
        </View>
      </View>
    </View>
  );
};

export default ReasonsDisplay;
