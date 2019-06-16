import React from "react";
import { ScrollView } from "react-native";
import ReasonList from "./ReasonList";
import Header from "./Header";
import { colors } from "../constants/colors";

const Layout = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: colors.background,
        height: "100%"
      }}
    >
      <Header />
      <ReasonList />
    </ScrollView>
  );
};

export default Layout;
