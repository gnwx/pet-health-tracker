import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import useFormContext from "../../hooks/useFormContext";

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
  return (
    <View>
      <Text>PET CREATED</Text>
      <Text>PET TYPE:{petName} </Text>
      <Text>PET TYPE:{petAge} </Text>
      <Text>PET TYPE:{petType} </Text>
      <Text>OFTENFEED:{petOftenFeed}</Text>
      <Text>OFTEN SECOND:{petOftenSecond}</Text>
      <Text>OFTEN THIRD : {petOftenThird}</Text>
      <Text>LAST FEED:{petLastFeed}</Text>
      <Text>LAST SECOND:{petLastSecond}</Text>
      <Text>LAST THIRD: {petLastThird}</Text>
      <Button title="Reset" onPress={() => setStep("step-1")} />
    </View>
  );
};

export default PetCreated;

const styles = StyleSheet.create({});
