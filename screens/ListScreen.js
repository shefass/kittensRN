import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  Slider,
  Platform,
  TouchableHighlight
} from "react-native";
import { kittens } from "./../components/data";
import { KeepAwake } from "expo";

export default class ListScreen extends React.Component {
  state = {
    value: 1
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Kittens List",
      headerRight: (
        <Button
          onPress={() => navigation.navigate("Details", {
            name: randomizedKittens[0].name,
            link: randomizedKittens[0].link
          })}
          title="Kitten Details"
          color={Platform.OS === 'ios' ? '#fff' : null}
          style={styles.button}
        />
      ),
    };
  };

  render() {
    return (
      <View style={styles.container}>
      
        <KeepAwake />
        <View style={styles.slider}>
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            onSlidingComplete={repeater(this.state.value)}
            minimumValue={1}
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
            <TouchableHighlight onPress={() =>
              this.props.navigation.navigate("Details", {
                name: item.name,
                link: item.link
              })
            } underlayColor="#f4511e">
            <View style={styles.item}>
              <Text style={styles.text}>
                {item.name}
              </Text>
              <Image
                source={{ uri: item.link }}
                style={{ width: 100, height: 100 }}
              />
            </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

getRndInteger = () => Math.floor(Math.random() * 100);
let randomizedKittens = [];

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
