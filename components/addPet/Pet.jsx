import { StyleSheet, View } from "react-native";
import React from "react";
import Input from "./Input";
import questions from "../../constants/questions.json";
import NextButton from "./NextButton";
import useFormContext from "../../hooks/useFormContext";
const Pet = ({ petSetters }) => {
  const { step, setStep, petType } = useFormContext();

  const nextStep = () => {
    let nextStep = "";
    if (step.endsWith("first")) {
      nextStep = `${petType}-second`;
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
        questions[petType][step].map((question, idx) => (
          <Input key={idx} setter={petSetters[idx]}>
            {question}
          </Input>
        ))
      }

      <NextButton handlePress={handlePress} />
    </View>
  );
};

export default Pet;

const styles = StyleSheet.create({});
