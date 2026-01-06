import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../context/AuthContext";
import LoginScreen from "../screens/LoginScreen";
import Home from "../screens/Home";
import Details from "../screens/Details";
import Favourites from "../screens/Favourites";
import AddAlbumScreen from "../screens/AddAlbumScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null; // Or a loading screen
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        // Authenticated screens
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Favourites" component={Favourites} />
          <Stack.Screen name="AddAlbum" component={AddAlbumScreen} />
        </>
      ) : (
        // Unauthenticated screens
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
