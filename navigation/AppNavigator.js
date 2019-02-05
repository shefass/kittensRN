import { createStackNavigator, createAppContainer } from "react-navigation";
import DetailsScreen from "./../screens/DetailsScreen";
import ListScreen from "./../screens/ListScreen";

const AppNavigator = createStackNavigator(
  {
    List: ListScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
