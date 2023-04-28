import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import usePetContext from "../hooks/usePetContext";
const PetCard = ({ pet }) => {
  const { deletePet } = usePetContext();
  return (
    <View>
      <Text>{pet.id} </Text>
      <Text>{pet.petName} </Text>
      <Button title="Delete" onPress={() => deletePet(pet.id)} />
    </View>
  );
};

export default PetCard;

const styles = StyleSheet.create({});
