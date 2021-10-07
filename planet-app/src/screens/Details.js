import React from "react";
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  View,
  ScrollView,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import { colors, spacing } from "../theme";

const PlanetSection = ({title, value}) => {
  return (
    <View style={styles.sectionView}>
      <Text>{ title}</Text>
      <Text preset="h2">{ value}</Text>
    </View>
  )
}

export default function Details({ route }) {
  const { planetData } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader isBackButton = {true} />
      <ScrollView>
        <View style={styles.parentView}>
          <Image source={planetData.surfaceImage} resizeMode="contain" style={styles.imageView} />
          <View style={styles.textView}>
            <Text style={styles.title} preset="h1">
              {planetData.name}
            </Text>
            <Text style={styles.desc}>
              {planetData.description}
            </Text>
          </View>
          <View style={styles.infoText}>
            <Text>Source: </Text>
            <Text style={styles.wikipedia}>Wikipedia</Text>
            <MaterialCommunityIcons name="file-export" size={19} color={colors.gray} />
          </View>
        </View>
          <PlanetSection title="Rotation Time" value={planetData.rotationTime} />
          <PlanetSection title="Revolution Time" value={planetData.revolutionTime} />
          <PlanetSection title="Radius" value={planetData.radius} />
          <PlanetSection title="Average Temp." value={planetData.avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Platform.OS === "android" ? 50 : null,
  },
  parentView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing[5],
  },
  imageView: {
    height: 250,
  },
  textView: {
    marginTop: spacing[8],

  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
    lineHeight: spacing[5],
    paddingHorizontal: spacing[5],
    marginTop: spacing[5]
  },
  infoText: {
    marginTop: spacing[8],
    flexDirection: 'row',
  },
  wikipedia: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  sectionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderWidth: 1,
    borderColor: colors.gray,
    marginHorizontal: spacing[5],
    marginBottom: spacing[4]
  },
});
