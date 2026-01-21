import { Kanit_400Regular, Kanit_700Bold, useFonts } from '@expo-google-fonts/kanit';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

export default function RootLayout() {

  //setFont for the page 
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='bmi'
        options={{
          title: 'BMI Calculator',
          headerStyle: { backgroundColor: '#64844e' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontFamily: 'Kanit_700Bold', fontSize: 24 },
        }} />
    </Stack>
  );
}
