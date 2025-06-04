import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./context/UserContext";
import Login from "./screens/login";
import CreateAccount from "./screens/createAccount";
import Tabs from "./navigation/BottomTabs";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#1A1A1A" },
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="main" component={Tabs} screenOptions={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
