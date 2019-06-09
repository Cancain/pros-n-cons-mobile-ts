import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ReasonList from "../ReasonList/ReasonList";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <View>
      <Header />
      <ReasonList />
    </View>
  );
};

export default Layout;
