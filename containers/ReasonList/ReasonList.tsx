import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Wrapper from "../Wrapper/Wrapper";
import ReasonsDisplay from "../../components/ReasonsDisplay/ReasonsDisplay";

const ReasonList = () => {
  const styles = StyleSheet.create({
    ListWrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }
  });

  return (
    <Wrapper>
      <View style={styles.ListWrapper}>
        <ReasonsDisplay headline="Pros" left />
        <ReasonsDisplay headline="Cons" />
      </View>
    </Wrapper>
  );
};

export default ReasonList;
