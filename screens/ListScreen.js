import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  Slider
} from "react-native";
import { kittens } from "./../components/data";
import { KeepAwake } from "expo";

export default class ListScreen extends React.Component {
  state = {
    value: 1
  };
  static navigationOptions = {
    title: "Kittens List"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            title="Go to First Kitten Details or Push Name"
            onPress={() =>
              this.props.navigation.navigate("Details", {
                name: randomizedKittens[0].name,
                link: randomizedKittens[0].link
              })
            }
          />
        </View>
        <KeepAwake />
        <View style={styles.slider}>
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            onSlidingComplete={repeater(this.state.value)}
            maximumValue={100}
            step={1}
          />
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Showing Kittens: {this.state.value} Use slider!!
          </Text>
        </View>
        <FlatList
          data={randomizedKittens}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text
                style={styles.text}
                onPress={() =>
                  this.props.navigation.navigate("Details", {
                    name: item.name,
                    link: item.link
                  })
                }
              >
                {item.name}
              </Text>
              <Image
                source={{ uri: item.link }}
                style={{ width: 100, height: 100 }}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

getRndInteger = () => Math.floor(Math.random() * 100);
let randomizedKittens = [
  { name: "Colly", link: "https://placekitten.com/200/200" }
];

function repeater(times) {
  randomizedKittens = [];
  for (let i = 0; i < times; i++) {
    randomizedKittens.push({
      name: kittens[getRndInteger()].key,
      link: kittens[getRndInteger()].link,
      key: i.toString()
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffeeee",

    justifyContent: "center"
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  },
  slider: {
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 10
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 5,
    marginBottom: 5
  },
  text: {
    fontSize: 40,
    marginRight: 10
  }
});
