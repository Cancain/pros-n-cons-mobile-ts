import React, { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import Wrapper from "../Wrapper/Wrapper";
import ReasonsDisplay from "../../components/ReasonsDisplay/ReasonsDisplay";
import Reason from "../../Interfaces/Reason";
import InputField from "../../components/InputField/InputField";

const ReasonList = () => {
  const [reasons, setReasons] = useState<Array<Reason>>([]);
  const [pros, setPros] = useState<Array<Reason>>([]);
  const [cons, setCons] = useState<Array<Reason>>([]);

  const styles = StyleSheet.create({
    ListWrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }
  });

  const addReason = (reason: Reason) => {
    const newReasons: Array<Reason> = reasons;
    newReasons.push(reason);
    setReasons(newReasons);
    sortReasons();
  };

  const sortReasons = () => {
    if (reasons) {
      reasons.map((reason, index) => {
        if (reason.isPro) {
          const newPros: Array<Reason> = pros;
          newPros.push(reason);
          setPros(newPros);
        } else {
          const newCons: Array<Reason> = cons;
          newCons.push(reason);
          setCons(newCons);
        }
      });
    }
  };

  const renderLists = (
    <View style={styles.ListWrapper}>
      <ReasonsDisplay headline="Pros" reasons={pros} left />
      <ReasonsDisplay headline="Cons" reasons={cons} />
    </View>
  );

  return (
    <Wrapper>
      <InputField addReason={(reason: Reason) => addReason(reason)} />
      {renderLists}
    </Wrapper>
  );
};

export default ReasonList;
