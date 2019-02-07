import React from "react";
import { Text, View, Image, NetInfo } from "react-native";
import AppContainer from "./navigation/AppNavigator";
import { AppLoading } from "expo";
import { kittens } from "./components/data";

export default class App extends React.Component {
  state = {
    isReady: false
  };
  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages(kittens);

    await Promise.all([...imageAssets]);
  }

  render() {
    if (!NetInfo.isConnected.fetch()) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", backgroundColor: "red" }}
        >
          <Text style={{ fontSize: 40, textAlign: "center" }}>
            "Sorry you dont have Internet Connection!"
          </Text>
        </View>
      );
    } else if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    } else {
      return <AppContainer />;
    }
  }
}

handleFirstConnectivityChange = isConnected => {
  console.log("Then, is " + (isConnected ? "online" : "offline")); 
  console.log(isConnected); 
  NetInfo.isConnected.removeEventListener(
    "connectionChange",
    handleFirstConnectivityChange
  );
};

function cacheImages(images) {
  return images.map(image => {
    if (typeof image.link === "string") {
      return Image.prefetch(image.link);
    }
  });
}
