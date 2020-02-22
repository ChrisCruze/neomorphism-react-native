import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          height: 100
          // padding: 20
        }}
      >
        <View
          style={{
            backgroundColor: "#E0E5EC",
            shadowColor: "#a3b1c6",
            shadowRadius: "16px",
            shadowOpacity: 0.6,
            shadowOffset: { width: "9px", height: "9px" },
            flex: 0.5
          }}
        >
          <View
            style={{
              backgroundColor: "#E0E5EC",
              shadowColor: "#ffffff",
              shadowRadius: "16px",
              shadowOpacity: 0.5,
              shadowOffset: { width: "-9px", height: "-9px" },
              flex: 1
            }}
          ></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E5EC",
    alignItems: "center",
    justifyContent: "center"
  }
});
