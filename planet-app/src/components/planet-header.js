import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors, spacing } from "../theme";
import Text from "./text/text";
import { useNavigation } from '@react-navigation/native';

export default function PlanetHeader({ isBackButton = false }) {
    const navigation = useNavigation();
  return (
    <View style={styles.headerView}>
      {isBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            size={24}
            color={colors.white}
            style={styles.backButton}
          />
        </TouchableOpacity>
      )}
      <Text preset="h2">THE PLANETS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    paddingLeft: spacing[6],
    paddingVertical: spacing[4],
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: spacing[4],
    top: 2,
  },
});
