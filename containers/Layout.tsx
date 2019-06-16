import React from "react";
import { View } from "react-native";
import ReasonList from "./ReasonList";
import Header from "./Header";
import { colors } from "../constants/colors";

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
