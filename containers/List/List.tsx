import React, { useState } from "react";
import { View } from "react-native";
import InputField from "../../components/InputField/InputField";
import ReasonList from "../ReasonList/ReasonList";

const List = () => {
  const [reasons, setReasons] = useState<Array<string>>([]);

  const addReason = (reason: string) => {
    const newReasons = reasons;
    newReasons.push(reason);
    setReasons(newReasons);
  };

  return (
    <View>
      <InputField addReason={(reason: string) => addReason(reason)} />
      <ReasonList />
    </View>
  );
};

export default List;
