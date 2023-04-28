import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import Pet from "../components/addPet/Pet";
import Form from "../components/addPet/Form";

const AddPet = () => {
  return (
    <View>
      <Form />
    </View>
  );
};

export default AddPet;

const styles = StyleSheet.create({});
