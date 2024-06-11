import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const LoginScreen = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 120,
        }}
      >
        <Image
          source={require("./../assets/images/react-logo.png")}
          style={{
            width: 320,
            height: 320,
          }}
        />
      </View>

      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 35,
          }}
        >
          Your Ultimate{" "}
          <Text style={{ color: Colors.PRIMARY, fontSize: 40 }}>
            {" "}
            Community Business Directory
          </Text>
          App.
        </Text>
        <Text style={{ fontSize: 15 }}>
          Find and create new businesses near you.
        </Text>

        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
            }}
          >
            SignIn
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: "#fff",
    padding: 20,
    fontSize: 40,
    marginTop: -20,
  },
  btn: {
    padding: 20,
    marginTop: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 20,
  },
});

export default LoginScreen;
