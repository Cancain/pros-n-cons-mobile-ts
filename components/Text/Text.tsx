import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

type Props = {
  children: string;
  style: object;
};

const TextComponent = (props: Props) => {
  return (
    <Text style={[props.style, { color: colors.text }]}>{props.children}</Text>
  );
};

export default TextComponent;
