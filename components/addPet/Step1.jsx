import { StyleSheet, TextInput, View, Button, Text } from "react-native";
import React from "react";

const Step1 = ({ setStep }) => {
  return (
    <View>
      <View>
        <Text>Pet name</Text>
        <TextInput />
      </View>
      <View>
        <Text>Pet age</Text>
        <TextInput />
      </View>
      <View>
        <Button title="Next" onPress={() => setStep("step-2")} />
      </View>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({});
