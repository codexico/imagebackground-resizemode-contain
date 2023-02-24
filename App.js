import * as React from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Dimensions,
  Text,
} from "react-native";

import backgroundImage from "./assets/488x488.png";

const { height, width } = Image.resolveAssetSource(backgroundImage);
console.log("  ~ height:", height);

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("screen");

let imageHeight = height;
if (deviceWidth < width) {
  // aspect ratio
  imageHeight = (deviceWidth / width) * height;
}
console.log("  ~ imageHeight:", imageHeight);
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.content}>
          <Text>content firstcontent firstcontent first</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content</Text>
          <Text>content last</Text>
        </View>
        <ImageBackground
          style={styles.imageBackgroundBottom}
          source={backgroundImage}
          resizeMode="contain"
        >
          <View style={styles.content}>
            <Text>content firstcontent firstcontent first</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content last</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "blue",
  },
  content: {
    flex: 1,
  },
  imageBackgroundTop: {
    backgroundColor: "green",
    flex: 1,
    top: -imageHeight / 2,
  },
  imageBackgroundBottom: {
    backgroundColor: "pink",
    flex: 1,
    // bottom: -imageHeight / 2,
  },
});
