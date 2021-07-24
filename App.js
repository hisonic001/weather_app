import React from "react";
import Loader from "./Loader";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "d7ba80bb279cf0a0a99d9fe764d354f1";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  async getLocation() {
    try {
      Location.requestForegroundPermissionsAsync();
      // send to API and get weather
      const {
        coords: { latitude },
        coords: { longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (e) {
      Alert.alert("Sorry, can't find you.... \n Plz check on Allow 😎");
    }
  }
  async getWeather(latitude, longitude) {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log({ data });
    // console.log(`${data.name}'s weather is ${data.weather}`);
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loader /> : null;
  }
}
