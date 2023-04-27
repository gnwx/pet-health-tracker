import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Step2 = ({ setStep }) => {
  const handleStep = (value) => {
    setStep(value);
  };
  return (
    <View>
      <Button title="Dog" onPress={() => handleStep("dog")} />
      <Button title="Cat" onPress={() => handleStep("cat")} />
      <Button title="Fish" onPress={() => handleStep("fish")} />
      <Button title="Bird" onPress={() => handleStep("bird")} />
    </View>
  );
};

export default Step2;

const styles = StyleSheet.create({});
