import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Wrapper from "../Wrapper/Wrapper";
import ReasonsDisplay from "../../components/ReasonsDisplay/ReasonsDisplay";
import Reason from "../../components/ReasonsDisplay/Reason/Reason";

interface Reason {
  isPro?: boolean;
  text?: string;
  strength?: number;
}

interface Props {
  reasons?: Array<Reason>;
}

const ReasonList = (props: Props) => {
  const [reason, setReason] = useState(props.reasons);
  const [pros, setPros] = useState<Array<Reason>>();
  const [cons, setCons] = useState<Array<Reason>>();

  const styles = StyleSheet.create({
    ListWrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }
  });

  const renderLists = (
    <View style={styles.ListWrapper}>
      <ReasonsDisplay headline="Pros" left />
      <ReasonsDisplay headline="Cons" />
      {console.warn(props.reasons)}
    </View>
  );

  return <Wrapper>{renderLists}</Wrapper>;
};

export default ReasonList;
