import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../Input";
import questions from "../../constants/questions.json";
import NextButton from "./NextButton";
import useFormContext from "../../hooks/useFormContext";
const Pet = ({ petSetters, pet }) => {
  const { step, setStep } = useFormContext();
  const nextStep = () => {
    let nextStep = "";
    if (step.endsWith("first")) {
      nextStep = `${pet}-second`;
      return nextStep;
    } else if (step.endsWith("second")) {
      nextStep = "pet-created";
      return nextStep;
    }
  };
  const handlePress = () => {
    const next = nextStep();
    setStep(next);
  };

  return (
    <View>
      {
        // for correct answers petSetters must sorted for questions.
        questions[pet][step].map((question, idx) => (
          <Input key={idx} setter={petSetters[idx]}>
            {question}
          </Input>
        ))
      }

      <NextButton title="next" handlePress={handlePress} />
    </View>
  );
};

export default Pet;

const styles = StyleSheet.create({});
