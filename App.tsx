import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Game from "./components/Game";
import MainMenu from "./components/MainMenu";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Altima: require("./assets/fonts/Altima.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{ title: "" }}
        />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
