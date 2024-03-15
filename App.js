import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStyles } from "./constants/styles";
import DemoForm from "./demo-form/DemoForm";
import DemoList from "./demo-form/DemoList";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import IconButton from "./ui/IconButton";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary400 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary400 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    //   <>
    //     <StatusBar style="light" />
    //     <ExpensesContextProvider>
    //       <NavigationContainer>
    //         <Stack.Navigator
    //           screenOptions={{
    //             headerStyle: { backgroundColor: GlobalStyles.colors.primary400 },
    //             headerTintColor: "white",
    //           }}
    //         >
    //           <Stack.Screen
    //             name="ExpensesOverview"
    //             component={ExpensesOverview}
    //             options={{ headerShown: false }}
    //           />
    //           <Stack.Screen name="ManageExpense" component={ManageExpense} />
    //         </Stack.Navigator>
    //       </NavigationContainer>
    //     </ExpensesContextProvider>
    //   </>

    //-----------------------DEMO FORM----------------------------

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Form" component={DemoForm} />
        <Stack.Screen name="List" component={DemoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
