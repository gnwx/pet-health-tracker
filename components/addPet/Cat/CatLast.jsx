import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CatLast = ({ setStep }) => {
  return (
    <View>
      <View>
        <Text>Last time you FEED</Text>
        <TextInput />
      </View>
      <View>
        <Text>Last time you WALK</Text>
        <TextInput />
      </View>
      <View>
        <Text>Last time go VET</Text>
        <TextInput />
      </View>
      <View>
        <Button title="Create" onPress={() => setStep("pet-created")} />
      </View>
    </View>
  );
};

export default CatLast;

const styles = StyleSheet.create({});
