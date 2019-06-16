import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ReasonList from "../ReasonList/ReasonList";
import Header from "../Header/Header";
import { colors } from "../../constants/colors";

const Layout = () => {
  return (
    <View
      style={{
        backgroundColor: colors.background
      }}
    >
      <Header />
      <ReasonList />
    </View>
  );
};

export default Layout;
