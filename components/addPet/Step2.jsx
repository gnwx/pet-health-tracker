import { Button, StyleSheet, View } from "react-native";
import React from "react";
import useFormContext from "../../hooks/useFormContext";

const Step2 = () => {
  const { setStep, setPetType } = useFormContext();
  const handleClick = (step, type) => {
    setPetType(type);
    setStep(step);
  };
  return (
    <View>
      <Button title="Dog" onPress={() => handleClick("dog-first", "dog")} />
      <Button title="Cat" onPress={() => handleClick("cat-first", "cat")} />
      <Button title="Fish" onPress={() => handleClick("fish-first", "fish")} />
      <Button title="Bird" onPress={() => handleClick("bird-first", "bird")} />
    </View>
  );
};

export default Step2;

const styles = StyleSheet.create({});
