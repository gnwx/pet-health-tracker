import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PetContextProvider } from "./context/PetContext";

import Home from "./screens/Home";
import AddPet from "./screens/AddPet";
import Pet from "./components/addPet/Pet";
import { FormContextProvider } from "./context/FormContext";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PetContextProvider>
      <FormContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddingPet" component={AddPet} />
          </Stack.Navigator>
        </NavigationContainer>
      </FormContextProvider>
    </PetContextProvider>
  );
}

export default App;
