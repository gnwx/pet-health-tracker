import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import useFormContext from "../../hooks/useFormContext";
import usePetContext from "../../hooks/usePetContext";

const PetCreated = () => {
  const {
    petName,
    petAge,
    petType,
    petOftenFeed,
    petOftenSecond,
    petOftenThird,
    petLastFeed,
    petLastSecond,
    petLastThird,
    setStep,
  } = useFormContext();

  const { createPet } = usePetContext();

  const pet = {
    petName,
    petAge,
    petType,
    petOftenFeed,
    petOftenSecond,
    petOftenThird,
    petLastFeed,
    petLastSecond,
    petLastThird,
  };
  return (
    <View>
      <Text>PET namee:{petName} </Text>
      <Text>PET age:{petAge} </Text>
      <Text>PET TYPE:{petType} </Text>
      <Text>OFTENFEED:{petOftenFeed}</Text>
      <Text>OFTEN SECOND:{petOftenSecond}</Text>
      <Text>OFTEN THIRD : {petOftenThird}</Text>
      <Text>LAST FEED:{petLastFeed}</Text>
      <Text>LAST SECOND:{petLastSecond}</Text>
      <Text>LAST THIRD: {petLastThird}</Text>
      <Button title="Reset" onPress={() => setStep("step-1")} />
      <Button title="create" onPress={() => createPet(pet)} />
    </View>
  );
};

export default PetCreated;

const styles = StyleSheet.create({});
