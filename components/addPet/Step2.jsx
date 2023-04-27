import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Step2 = ({ setStep }) => {
  const handleStep = (value) => {
    setStep(value);
  };
  return (
    <View>
      <Button title="Dog" onPress={() => handleStep("dog-first")} />
      <Button title="Cat" onPress={() => handleStep("cat-first")} />
      <Button title="Fish" onPress={() => handleStep("fish-first")} />
      <Button title="Bird" onPress={() => handleStep("bird-first")} />
    </View>
  );
};

export default Step2;

const styles = StyleSheet.create({});
