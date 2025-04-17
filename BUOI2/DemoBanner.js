import React, { useState } from "react";
import { View, Image, Alert } from "react-native";
import { Banner, Button } from "react-native-paper";

const DemoBanner = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
      <Banner
        visible={visible}
        actions={[
          {
            label: "Show",
            onPress: () => setVisible(true),
          },
          {
            label: "Hide",
            onPress: () => setVisible(false),
          },
        ]}
        icon={() => (
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        )}
      >
        Welcome to the demo banner!
      </Banner>

      <Button
        mode="outlined"
        onPress={() => Alert.alert("Hello")}
        icon="email"
        style={{ backgroundColor: "blue", marginTop: 16 }}
        labelStyle={{ color: "white" }}
      >
        Press me
      </Button>
    </View>
  );
};

export default DemoBanner;
