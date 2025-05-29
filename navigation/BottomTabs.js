import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "@iconify/react";
import Profile from "../screens/Profile";
import Feed from "../screens/Feed";

export default function Tabs(){
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;
            if (route.name === "Feed") {
              iconName = "material-symbols-light:news-outline";
            } else if (route.name === "Profile") {
              iconName = "material-symbols:person";
            }
            return (
              <Icon
                icon={iconName}
                width={44}
                height={44}
                style={{ color: "#F5F5F5" }}
              />
            );
          },
          tabBarStyle: {
            height: 96,
            backgroundColor: "#1A1A1A"
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 300,
          },
          tabBarLabelPosition: "below-icon",
        })}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    );
}