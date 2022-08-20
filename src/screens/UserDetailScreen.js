import React, { useEffect } from "react";
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetail } from "../store/actions/userActions";
import { useNavigation } from "@react-navigation/native";

const UserDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { users } = useSelector((state) => state.userDetailReducer);
  const dispatch = useDispatch();
  const userDetail = () => dispatch(getUserDetail(route.params.id));
  console.log(JSON.stringify(users, null, 2));
  useEffect(() => {
    userDetail();
  }, []);
  console.log(users.company);
  return <SafeAreaView style={styles.view}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>BACK BUTTON</Text>
    </TouchableOpacity>
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image source={{ uri: users.image }} style={{ width: 200, height: 200 }} />
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Text>{users.firstName} </Text>
        <Text>{users.lastName} , </Text>
        <Text>{users.age}</Text>
      </View>
      <View>
        <Text>Address : {users.company?.address?.address}</Text>
        <Text>City : {users.company?.address?.city}</Text>
        <Text>PostCode :{users.company?.address?.postalCode}</Text>
        <Text>State : {users.company?.address?.state}</Text>
      </View>
    </View>
  </SafeAreaView>;
};
export default UserDetailScreen;


const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "white",
  },
});
