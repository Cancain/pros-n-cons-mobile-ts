import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import ReasonComponent from "./Reason/Reason";
import Reason from "../../Interfaces/Reason";

interface Props {
  left?: boolean;
  headline: string;
  reasons?: Array<Reason>;
}

const testReason: Reason = {
  text: "lasd",
  strength: 2,
  isPro: true
};

const ReasonsDisplay = (props: Props) => {
  const [reasons, setReasons] = useState();

  const styles = StyleSheet.create({
    Container: {
      width: "100%",
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
    }
  });

  const renderHeadlines = (
    <Text style={{ textAlign: "center", fontSize: 20 }}>{props.headline}</Text>
  );

  const renderLabels = (
    <View style={styles.LabelWrapper}>
      <Text style={{ marginLeft: "1.5%", fontWeight: "bold" }}>Reason</Text>
      <Text style={{ marginRight: "1.5%", fontWeight: "bold" }}>Strength</Text>
    </View>
  );
  let renderReasons = null;
  if (props.reasons) {
    renderReasons = props.reasons.map((reason, index) => {
      console.warn(reason.text);
      return (
        <ReasonComponent
          text={reason.text}
          strength={reason.strength}
          key={index}
        />
      );
    });
  }

  return (
    <View style={{ width: "48.5%" }}>
      {renderHeadlines}
      <View style={styles.Container}>
        {renderLabels}
        {renderReasons}
      </View>
    </View>
  );
};

export default ReasonsDisplay;
