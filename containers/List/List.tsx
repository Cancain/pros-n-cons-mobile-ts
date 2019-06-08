import React, { useState } from "react";
import { View } from "react-native";
import InputField from "../../components/InputField/InputField";
import ReasonList from "../ReasonList/ReasonList";

const List = () => {
  return (
    <View>
      <InputField />
      <ReasonList />
    </View>
  );
};

export default List;
