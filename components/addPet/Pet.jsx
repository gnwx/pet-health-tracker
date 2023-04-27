import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../Input";
import questions from "../../constants/questions.json";
import NextButton from "./NextButton";
const Pet = ({ petSetters, pet, step, setStep }) => {
  const handleStep = () => {
    let nextStep = "";
    if (step.endsWith("first")) nextStep = pet + "-second";
    if (step.endsWith("second")) nextStep = "pet-created";
    return nextStep;
  };

  return (
    <View>
      {
        // for correct answers petSetters must sorted for questions.
        questions[pet][step].map((question, idx) => (
          <Input setter={petSetters[idx]}> {question} </Input>
        ))
      }
      <NextButton
        setStep={setStep}
        step={handleStep}
        title={step.endsWith("second") ? "Create" : "Next"}
      />
    </View>
  );
};

export default Pet;

const styles = StyleSheet.create({});
