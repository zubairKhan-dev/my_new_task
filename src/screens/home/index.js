/* eslint-disable */
import React from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";
import { styles } from "./styles";
import * as authActions from "../../../actions/auth";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { connect } from "react-redux";

const HomeScreen = (props) => {
  console.log(props)

  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <Button
        title="logout"
        onPress={async () => {
          props.actions.logout() // action to logout
        }}
      />
    </View>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


