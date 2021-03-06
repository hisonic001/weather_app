import React from "react";
import { Alert } from "react-native";
import Loader from "./Loader";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "d7ba80bb279cf0a0a99d9fe764d354f1";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
        name,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(name);
    this.setState({
      isLoading: false,
      temp,
      condition: "Clear",
      city: name,
    });
  };

  async getLocation() {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (e) {
      Alert.alert("Sorry, can't find you.... \n Plz check on Allow 😎");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, city } = this.state;
    return isLoading ? (
      <Loader />
    ) : (
      <Weather temp={Math.round(temp)} city={city} condition={condition} />
    );
  }
}
