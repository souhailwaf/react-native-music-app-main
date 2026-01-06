import { NavigationContainer } from "@react-navigation/native";
import { ContextProvider } from "./src/context/context";
import { AuthProvider } from "./src/context/AuthContext";
import AppStack from "./src/navigation/AppStack";
import {
  useFonts,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <ContextProvider>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </ContextProvider>
    </AuthProvider>
  );
};

export default App;
