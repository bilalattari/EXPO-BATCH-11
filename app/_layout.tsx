import { Stack } from 'expo-router/stack';

export default function Layout() {
  return <Stack 
  screenOptions={{
    headerShown : false
  }}
  initialRouteName='index'>
    <Stack.Screen name='index'  />
    <Stack.Screen name='bykea' />
  </Stack>;
}
