import React from "react";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import PlanetHeader from "../components/planet-header";
import { colors } from "../theme";

export default function Wikipedia({ route }) {
  const { link } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader isBackButton="true" />
      <WebView source={{ uri: link }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: colors.black,
    // paddingTop: Platform.OS === "android" ? 50 : null,
  },
})
