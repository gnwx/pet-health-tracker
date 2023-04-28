import { Button, StyleSheet } from "react-native";
import React from "react";

const NextButton = ({ title = "Next", handlePress }) => {
  return <Button title={title} onPress={handlePress} />;
};

export default NextButton;

const styles = StyleSheet.create({});
