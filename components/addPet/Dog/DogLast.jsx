import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

const DogLast = ({
  setDogLastFeed,
  setDogLastWalk,
  setDogLastVet,
  setStep,
}) => {
  return (
    <View>
      <View>
        <Text>Last time you FEED</Text>
        <TextInput onChangeText={setDogLastFeed} />
      </View>
      <View>
        <Text>Last time you WALK</Text>
        <TextInput onChangeText={setDogLastWalk} />
      </View>
      <View>
        <Text>Last time go VET</Text>
        <TextInput onChangeText={setDogLastVet} />
      </View>
      <View>
        <Button title="Create" onPress={() => setStep("pet-created")} />
      </View>
    </View>
  );
};

export default DogLast;

const styles = StyleSheet.create({});
