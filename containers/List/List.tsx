import React, { useState } from "react";
import { View } from "react-native";
import InputField from "../../components/InputField/InputField";
import ReasonList from "../ReasonList/ReasonList";
import Reason from "../../Interfaces/Reason";

const List = () => {
  const [reasons, setReasons] = useState<Array<Reason>>();

  return <ReasonList />;
};

export default List;
