import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const weatherOptions = {
  Clouds: {
    iconName: "cloud-outline",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "구름 뒤에는 언제나 태양이 빛나고 있다",
    subtitle: "희망을 잃지 마세요!",
    Top: "흐림",
  },
  Clear: {
    iconName: "sunny-outline",
    gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
    title: "기분좋은 화창한 날입니다",
    subtitle: "산책이라도 가볼까요?",
    Top: "맑음",
  },
  Thunderstrom: {
    iconName: "thunderstorm-outline",
    gradient: ["#BA8B02", "#181818"],
    title: "연간 240,000명이 벼락을 맞습니다",
    subtitle: "밖에 나가지 마세요...",
    Top: "뇌우",
  },
  Rain: {
    iconName: "rainy-outline",
    gradient: ["#1A2980", "#26D0CE"],
    title: "Others get wet, someone just walk",
    subtitle: "-Dolly Parton-",
    Top: "비",
  },
  Snow: {
    iconName: "snow-outline",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "Do you wanna build a snowman?",
    subtitle: "Okay, bye",
    Top: "눈",
  },
  // Drizzle: { iconName: "rainy-outline", gradient: [] },
  // Atmosphere: { iconName: "", gradient: [] },
  // Haze: { iconName: "", gradient: [] },
  // Dust: { iconName: "", gradient: [] },
  // Smoke: { iconName: "", gradient: [] },
  // Fog: { iconName: "", gradient: [] },
  // Mist: { iconName: "", gradient: [] },
};

export default function Weather({ city, temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar style="auto" />
      <View style={styles.top}>
        <Text style={styles.city}>{city}</Text>
      </View>
      <View style={styles.halfContainer}>
        <Ionicons
          name={weatherOptions[condition].iconName}
          size={120}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.wed}>{weatherOptions[condition].Top}</Text>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstrom",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    // "Drizzle",
    // "Atmosphere",
    // "Haze",
    // "Dust",
    // "Smoke",
    // "Fog",
    // "Mist",
  ]).isRequired,
  city: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#4d4d4d",
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: { elevation: 8 },
    }),
  },
  temp: {
    fontSize: 45,
    color: "white",
  },
  top: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 20,
    paddingRight: 200,
  },
  city: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  wed: {
    color: "white",
    marginBottom: 20,
    fontSize: 40,
    fontWeight: "300",
    textAlign: "left",
  },
  title: {
    color: "white",
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "300",
    textAlign: "left",
  },
  subtitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "300",
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1.5,
  },
});
