import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Wrapper from "./Wrapper";
import Reason from "../Interfaces/Reason";
import InputField from "../components/InputField";
import ReasonComponent from "../components/Reason";
import Text from "../components/Text";

const ReasonList = () => {
  const [pros, setPros] = useState<Reason[]>([]);
  const [cons, setCons] = useState<Reason[]>([]);

  const styles = StyleSheet.create({
    Rows: {
      display: "flex",
      flexDirection: "column"
    },
    Columns: {
      display: "flex",
      flexDirection: "row"
    },
    Headlines: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
    LabelWrapper: {
      display: "flex",
      flexDirection: "row",
      width: "48.5%",
      justifyContent: "space-between",
      backgroundColor: "rgba(0,0,0,0.2)",
      borderRadius: 7,
      marginRight: "auto",
      marginLeft: "auto"
    },
    ReasonWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "48.5%",
      marginLeft: "1%"
    }
  });

  const sortReason = (reason: Reason) => {
    if (reason.isPro) {
      const newPros: Array<Reason> = [...pros];
      newPros.push(reason);
      setPros(newPros);
    } else {
      const newCons: Array<Reason> = [...cons];
      newCons.push(reason);
      setCons(newCons);
    }
  };

  const renderHeadlines = (
    <View style={styles.Headlines}>
      <Text style={{ marginRight: "20%", fontSize: 20, fontWeight: "bold" }}>
        Pros
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cons</Text>
    </View>
  );

  const renderLabels = (
    <View style={styles.Columns}>
      <View style={styles.LabelWrapper}>
        <Text style={{ marginLeft: 10 }}>Reason</Text>
        <Text style={{ marginRight: 10 }}>Strength</Text>
      </View>

      <View style={styles.LabelWrapper}>
        <Text style={{ marginLeft: 10 }}>Reason</Text>
        <Text style={{ marginRight: 10 }}>Strength</Text>
      </View>
    </View>
  );

  let renderPros = null;
  if (pros)
    renderPros = pros.map((reason, index) => {
      return (
        <ReasonComponent
          text={reason.text}
          strength={reason.strength}
          key={index}
        />
      );
    });

  let renderCons = null;
  if (pros)
    renderCons = cons.map((reason, index) => {
      return (
        <ReasonComponent
          text={reason.text}
          strength={reason.strength}
          key={index}
        />
      );
    });

  return (
    <Wrapper>
      <InputField addReason={(reason: Reason) => sortReason(reason)} />
      <View style={styles.Rows}>
        {renderHeadlines}
        {renderLabels}
        <View style={styles.Columns}>
          <View style={styles.ReasonWrapper}>{renderPros}</View>
          <View style={styles.ReasonWrapper}>{renderCons}</View>
        </View>
      </View>
    </Wrapper>
  );
};

export default ReasonList;
