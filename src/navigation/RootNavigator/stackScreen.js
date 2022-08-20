import React from "react";
import UserListScreen from "../../screens/UserListScreen";
import { createStackNavigator } from "@react-navigation/stack";
import UserDetailScreen from "../../screens/UserDetailScreen";

const Stack = createStackNavigator();

const options = {
  headerShown: false,
};

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="UserList">
      <Stack.Screen options={() => options} name="UserList" component={UserListScreen} />
      <Stack.Screen options={() => options} name="UserDetail" component={UserDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackScreen;
