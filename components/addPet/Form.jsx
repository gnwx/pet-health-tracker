import { StyleSheet, View } from "react-native";
import React from "react";
import Pet from "./Pet";
import Step1 from "../../components/addPet/Step1";
import Step2 from "../../components/addPet/Step2";
import PetCreated from "../../components/addPet/PetCreated";
import useFormContext from "../../hooks/useFormContext";

const Form = () => {
  //constant steps
  const step1 = "step-1";
  const step2 = "step-2";
  const petCreated = "pet-created";

  const {
    step,
    petType,
    setPetOftenFeed,
    setPetOftenSecond,
    setPetOftenThird,
    setPetLastFeed,
    setPetLastSecond,
    setPetLastThird,
  } = useFormContext();

  return (
    <View>
      {step === step1 && <Step1 />}
      {step === step2 && <Step2 />}
      {step === `${petType}-first` && (
        <Pet
          petSetters={[setPetOftenFeed, setPetOftenSecond, setPetOftenThird]}
        />
      )}
      {step === `${petType}-second` && (
        <Pet petSetters={[setPetLastFeed, setPetLastSecond, setPetLastThird]} />
      )}
      {step === petCreated && <PetCreated />}
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
