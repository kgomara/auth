import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";

import { Header } from "./components/common";
import {
  apiKey,
  authDomain,
  databaseURL,
  storageBucket,
  messagingSenderId
} from "../src/config";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: apiKey,
      authDomain: authDomain,
      databaseURL: databaseURL,
      storageBucket: storageBucket,
      messagingSenderId: messagingSenderId
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
