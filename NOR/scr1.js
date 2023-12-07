import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const nav = useNavigation();

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
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          height: 100,
          width: "100%",
        }}
      >
        <Image
          source={require("./1img3.png")}
          style={{ resizeMode: "contain", width: 70, height: 70, marginRight:30 }}
        />
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "#FF6347" }}>
          Wellcome
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "flex-end",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "#FF6347",
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}
      >
        <TouchableOpacity
        onPress={()=>nav.navigate('second')}
          style={{
            flexDirection:'row',
            justifyContent:'space-around',
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            height: 80,
            width: 300,
            borderRadius: 30,

          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FF6347" }}>
            Get Started
          </Text>
          <Image
          source={require("./1img2.png")}
          style={{ resizeMode: "contain", width: 40, height: 40}}
        />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
