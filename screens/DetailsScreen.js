import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { loreIpsum } from "./../components/data";


export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Kitten Details"
  };
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name");
    const link = navigation.getParam("link");

    return (
      <View style={styles.container}>
        <Image source={{ uri: link }} style={{ width: 200, height: 200 }} />
        <Text style={{ fontSize: 40, marginTop: 15 }}>{name}</Text>
        <Text style={{ margin: 15, textAlign: "justify" }}>
          {"\t\t\t\t"}
          {loreIpsum}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffeeee",
    alignItems: "center",
    justifyContent: "center"
  }
});
