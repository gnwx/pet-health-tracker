import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const NextButton = ({ title = "Next", step, setStep }) => {
  return <Button title={title} onPress={() => setStep(step)} />;
};

export default NextButton;

const styles = StyleSheet.create({});
