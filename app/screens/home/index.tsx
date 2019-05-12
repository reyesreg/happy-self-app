import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { WebBrowser } from "expo";

interface IProps {
  cool?: string;
}

export default class HomeScreen extends Component<IProps> {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        {/* <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        > */}
          <Text>It's clear to say</Text>
        {/* </ScrollView> */}
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress}>
          Learn more
        </Text>
      );

      return (
        <Text>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
}