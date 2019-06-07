import React, { useState } from "react";
import { View } from "react-native";
import InputField from "../../components/InputField/InputField";
import ReasonList from "../ReasonList/ReasonList";

const List = () => {
  const [reasons, setReasons] = useState<Array<Object>>([]);

  const addReason = (reason: string) => {
    const newReasons = reasons;
    newReasons.push(reason);
    setReasons(newReasons);
  };

  const getReasons = () => {
    return reasons;
  };

  return (
    <View>
      <InputField addReason={(reason: string) => addReason(reason)} />
      <ReasonList reasons={reasons} />
    </View>
  );
};

export default List;
