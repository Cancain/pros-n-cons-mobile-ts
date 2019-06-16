import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import SelectorBtn from "../UI/SelectorBtn/SelectorBtn";
import Btn from "../UI/Btn/Btn";
import ValueSlide from "../UI/ValueSlide/ValueSlide";
import Wrapper from "../../containers/Wrapper/Wrapper";
import Reason from "../../Interfaces/Reason";
import colors from "../../constants/colors";

interface Props {
  addReason: Function;
}

const InputField = (props: Props) => {
  const [isPro, setIsPro] = useState(true);
  const [text, setText] = useState();
  const [strength, setStrength] = useState(1);

  const styles = StyleSheet.create({
    Wrapper: {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingVertical: 10,
      borderRadius: 7
    },
    Container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    },
    InputField: {
      color: colors.text,
      width: "70%",
      backgroundColor: "rgba(0,0,0,0.4)",
      borderRadius: 7,
      fontSize: 20,
      marginRight: 2.5
    }
  });

  const switchProCon = (selector: boolean) => {
    setIsPro(selector);
  };

  const addReason = () => {
    const reason: Reason = {
      isPro,
      text,
      strength
    };

    props.addReason(reason);
  };

  const renderReasonInput = (
    <View style={styles.Container}>
      <TextInput
        style={styles.InputField}
        placeholder="Insert reason here..."
        onChangeText={value => setText(value)}
      />
      <Btn text="Add" clicked={() => addReason()} />
    </View>
  );

  const renderSelectors = (
    <View style={styles.Container}>
      <SelectorBtn
        text="Pro"
        selected={isPro}
        selectedColor="green"
        clicked={() => switchProCon(true)}
      />
      <SelectorBtn
        text="Con"
        selected={!isPro}
        selectedColor="red"
        clicked={() => switchProCon(false)}
      />
    </View>
  );

  const renderView = (
    <Wrapper>
      {renderReasonInput}
      <ValueSlide
        text="Strength"
        valueChanged={(value: number) => setStrength(value)}
      />
      {renderSelectors}
    </Wrapper>
  );

  return renderView;
};

export default InputField;
