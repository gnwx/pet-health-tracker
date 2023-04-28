import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import usePetContext from "../hooks/usePetContext";
import PetCard from "../components/PetCard";
const Home = ({ navigation }) => {
  const { pets, clearPets } = usePetContext();

  return (
    <View>
      <Button
        title="Add pet"
        onPress={() => navigation.navigate("AddingPet")}
      />
      {pets ? (
        pets.map((pet) => {
          return <PetCard pet={pet} />;
        })
      ) : (
        <Text>There is no pet! </Text>
      )}
      <Button title="clear" onPress={clearPets} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
