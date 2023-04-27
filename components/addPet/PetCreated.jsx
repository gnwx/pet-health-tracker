import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const PetCreated = ({ navigation }) => {
  return (
    <View>
      <Button title="Go back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default PetCreated;

const styles = StyleSheet.create({});
