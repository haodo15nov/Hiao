import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Modal,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useState } from "react";
import { useEffect } from "react";
export default function scr2() {
  const nav = useNavigation();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // ------------------chức năng add user
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  // ------------------call apo
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  //CHuyển dữ liệu sang scr3
  const handleUserPress = (user) => {
    nav.navigate("third", { userData: user });
  };
  // --------------------modal
  const handleAddUser = () => {
    setIsAddModalVisible(true);
  };

  const handleSaveUser = () => {
    // Implement your logic to save the new user
    // You may perform API calls or update state accordingly

    // For example, add the new user to the state
    setUsers((prevUsers) => [...prevUsers, newUser]);

    // Close the modal and reset the input fields
    setIsAddModalVisible(false);
    setNewUser({
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    });
  };
  const handleDeleteUser = (userId) => {
    // Implement your logic to delete the user
    // You may perform API calls or update state accordingly
    // For example, remove the user from the state
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };


  //=-----------------------------------------------------
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        height: 100000,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "#FF6347",
          height: 90,
          width: "100%",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          borderBottomWidth: 3,
        }}
      >
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          List
        </Text>
      </View>

      <FlatList
        data={users}
        keyExtractor={(item) =>
          item.id ? item.id.toString() : Math.random().toString()
        }
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                backgroundColor: "#FF6347",
                height: 90,
                width: 390,
                flexDirection: "row",
                justifyContent: "space-around",
                alignContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginVertical: 10,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
              >
                Name: {item.name}
              </Text>
              <TouchableOpacity onPress={() => handleUserPress(item)}>
                <Image
                  source={require("./1img4.png")}
                  style={{
                    resizeMode: "center",
                    height: 30,
                    width: 30,
                    borderColor: "white",
                  }}
                />
              </TouchableOpacity>
              {/* delete button */}
              <TouchableOpacity onPress={() => handleDeleteUser(item.id)}>
                <Image
                  source={require("./1img9.png")}
                  style={{
                    resizeMode: "center",
                    height: 30,
                    width: 30,
                    borderColor: "white",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {/*----------- ADD  --------------*/}
      <View
        style={{
          height: 200,
          width: "100%",
          backgroundColor: "#FF6347",
          borderTopWidth: 3,
          borderColor: "black",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={handleAddUser}>
          <Image
            source={require("./1img8.png")}
            style={{ resizeMode: "contain", height: 80, width: 80 }}
          />
        </TouchableOpacity>
      </View>
      {/* Add User Modal */}
      <Modal visible={isAddModalVisible} animationType="slide">
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 24, marginBottom: 20 }}>Add User</Text>
          {/* Input fields for adding a new user */}
          <TextInput
            placeholder="Enter Name"
            style={styles.input}
            value={newUser.name}
            onChangeText={(text) => setNewUser({ ...newUser, name: text })}
          />
          <TextInput
            placeholder="Enter Username"
            style={styles.input}
            value={newUser.username}
            onChangeText={(text) => setNewUser({ ...newUser, username: text })}
          />
          <TextInput
            placeholder="Enter Email"
            style={styles.input}
            value={newUser.email}
            onChangeText={(text) => setNewUser({ ...newUser, email: text })}
          />
          <TextInput
            placeholder="Enter City"
            style={styles.input}
            value={newUser.address.city}
            onChangeText={(text) =>
              setNewUser({
                ...newUser,
                address: { ...newUser.address, city: text },
              })
            }
          />
          {/* Add more input fields as needed */}
          <Button title="Save" onPress={handleSaveUser} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
const styles = {
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 200,
  },
};
