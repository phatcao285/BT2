import React from "react";
import { View, Alert } from "react-native";
import { Appbar } from "react-native-paper";

const DemopAppar = () => {
  const goBack = () => Alert.alert("Go back");
  const search = () => Alert.alert("Search clicked");

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Home" />
        <Appbar.Action icon="magnify" onPress={search} />
      </Appbar.Header>
    </View>
  );
};

export default DemopAppar;
