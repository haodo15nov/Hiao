    import React from "react";
    import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    } from "react-native";
    import { useRoute } from "@react-navigation/native";
    import { useNavigation } from "@react-navigation/native";

    export default function Scr3() {
    const nav = useNavigation();
    const route = useRoute();
    const { userData } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <View
            style={{
            height: 100,
            width: "100%",
            alignItems: "center",
            alignContent: "center",
            }}
        >
            <View
            style={{
                alignContent: "center",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white",
                height: 90,
                width: "100%",
                flexDirection: "row",
            }}
            >
            <TouchableOpacity onPress={() => nav.goBack("scr2")}>
                <Image
                source={require("./1img6.png")}
                style={{
                    resizeMode: "contain",
                    height: 50,
                    width: 50,
                    marginLeft: 20,
                }}
                ></Image>
            </TouchableOpacity>

            <Text style={{ fontWeight: "bold", fontSize: 30 }}>DETAIL</Text>
                {/* Edit infor */}
            <TouchableOpacity>
                <Image
                source={require("./1img7.png")}
                style={{
                    resizeMode: "contain",
                    height: 50,
                    width: 50,
                    marginRight: 20,
                }}
                ></Image>
            </TouchableOpacity>
            </View>
            <View
            style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                height: 200,
                width: 170,
                marginTop: 30,
            }}
            >
            <Image
                source={require("./1img5.png")}
                style={{
                resizeMode: "contain",
                height: 100,
                width: 100,
                marginTop: 10,
                }}
            />
            </View>
            <View
            style={{
                margin: 30,
                alignItems: "center",
                alignContent: "center",
                padding: 10,
                justifyContent: "space-between",
            }}
            >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Name: {userData.name}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                userName: {userData.username}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Email: {userData.email}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Street: {userData.address.street}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Suite: {userData.address.suite}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                City: {userData.address.city}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Zipcode: {userData.address.zipcode}
            </Text>
            </View>
        </View>
        </SafeAreaView>
    );
    }
