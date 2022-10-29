/* eslint-disable */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./src/screens/signIn";
import SignUpScreen from "./src/screens/signUp";
import HomeScreen from "./src/screens/home";
import { connect } from "react-redux";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { useEffect } from "react";
import * as authActions from "./actions/auth";


const Stack = createNativeStackNavigator();


function App(props) {

  //retrieving token on starting of app
  useEffect(() => {
    console.log(props.user);
    props.actions.retrieveToken();
  }, []);

  return (
    <NavigationContainer>
      {props.auth.user == null ?
        (
          <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignInScreen}
                          options={{ headerShown: false }}
            />
            <Stack.Screen name="SignUp" component={SignUpScreen}
                          options={{
                            title: "Register Here!",
                            headerStyle: {
                              backgroundColor: "#009387",
                            },
                            headerTintColor: "#fff",
                            headerTitleStyle: {
                              fontWeight: "bold",
                            },
                          }}
            />
          </Stack.Navigator>
        )
        :
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>

      }

    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const ActionCreators = Object.assign(
  {},
  authActions,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
