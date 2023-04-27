import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Cat = ({ setStep }) => {
  return (
    <View>
      <View>
        <Text>How many times a day do you FEED</Text>
        <TextInput />
      </View>
      <View>
        <Text>How often you clean cats litter box?</Text>
        <TextInput />
      </View>
      <View>
        <Text>How often you go VET</Text>
        <TextInput />
      </View>
      <View>
        <Button title="next" onPress={() => setStep("cat-last")} />
      </View>
    </View>
  );
};

export default Cat;

const styles = StyleSheet.create({});
