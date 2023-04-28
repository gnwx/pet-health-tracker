import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Pet from "./Pet";
import Step1 from "../../components/addPet/Step1";
import Step2 from "../../components/addPet/Step2";
import PetCreated from "../../components/addPet/PetCreated";
import useFormContext from "../../hooks/useFormContext";
const Form = () => {
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
      {step === "step-1" && <Step1 />}
      {step === "step-2" && <Step2 />}
      {step === `${petType}-first` && (
        <Pet
          pet={petType}
          petSetters={[setPetOftenFeed, setPetOftenSecond, setPetOftenThird]}
        />
      )}
      {step === `${petType}-second` && (
        <Pet
          pet={petType}
          petSetters={[setPetLastFeed, setPetLastSecond, setPetLastThird]}
        />
      )}
      {step === "pet-created" && <PetCreated />}
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
