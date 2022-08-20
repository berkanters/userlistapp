import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../store/actions/userActions";
import { useNavigation } from "@react-navigation/native";

const UserListScreen = () => {
  const [expense, setExpense] = useState();
  const navigation = useNavigation();
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const userList = () => dispatch(getUserList());
  console.log(JSON.stringify(users, null, 2));
  useEffect(() => {
    userList();
    setExpense(users);
  }, []);
  const removeHandler = id => e => {
    const filteredExpense = expense.filter(e => {
      return e.id !== id;
    });

    setExpense(filteredExpense);
  };
  const renderItem = ({ item }) => {
    return <TouchableOpacity
      style={styles.renderItem}
      onPress={() => navigation.navigate("UserDetail", { id: item.id })}>
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}
                        onPress={() => removeHandler()}><Text>X</Text></TouchableOpacity>
      <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
      <View style={{ flexDirection: "row" }}>
        <Text>{item.firstName} ,</Text>
        <Text>{item.age}</Text>
      </View>
    </TouchableOpacity>;
  };


  return <SafeAreaView style={styles.view}>
    <View style={{ backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", marginHorizontal: 20, marginVertical: 10 }}>
        <FlatList data={expense} renderItem={renderItem} numColumns={2} showsVerticalScrollIndicator={false} />
      </View>
      <TouchableOpacity
        style={styles.addButton}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>;
};
export default UserListScreen;


const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 150,

  },
  renderItem: {
    borderWidth: 1, borderColor: "red",
    borderRadius: 20, justifyContent: "center",
    alignItems: "center", width: "50%", height: 200, marginVertical: 10,
  },
  addButton: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    paddingBottom: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
});
