/* eslint-disable */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import { styles } from "./styles";
import validators from "../../../util/validators";
import * as authActions from "../../../actions/auth";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { connect } from "react-redux";

const SignInScreen = (props) => {

  // set of form data
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { colors } = useTheme();

  // text input validation
  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false
      });
    }
  }

  // password validation
  const handlePasswordChange = (val) => {
    if( val.match(validators.password) ) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      });
    }
  }

  // updating text entry
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  // user validation
  const handleValidUser = (val) => {
    if( val.match(validators.email) ) {
      setData({
        ...data,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        isValidUser: false
      });
    }
  }

  // handling login function
  const loginHandle = async (userName, password) => {
    if (userName!= '' && password!= '' && data.isValidUser && data.isValidPassword) {
      props.actions.login()
    }
    else {
      alert('Please fill form properly')
    }
  }

  // rendering ui
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {
          backgroundColor: colors.background
        }]}
      >
        <Text style={[styles.text_footer, {
          color: colors.text
        }]}>Email</Text>
        <View style={styles.action}>
          <FontAwesome
            name="envelope"
            color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#666666"
            style={[styles.textInput, {
              color: colors.text
            }]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ?
            <Animatable.View
              animation="bounceIn"
            >
              <Feather
                name="check-circle"
                color="green"
                size={20}
              />
            </Animatable.View>
            : null}
        </View>
        { data.isValidUser ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Enter valid email id</Text>
          </Animatable.View>
        }


        <Text style={[styles.text_footer, {
          color: colors.text,
          marginTop: 35
        }]}>Password</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[styles.textInput, {
              color: colors.text
            }]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ?
              <Feather
                name="eye-off"
                color="grey"
                size={20}
              />
              :
              <Feather
                name="eye"
                color="grey"
                size={20}
              />
            }
          </TouchableOpacity>
        </View>
        { data.isValidPassword ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Enter valid Password</Text>
          </Animatable.View>
        }


        <TouchableOpacity>
          <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.signIn, {
              borderColor: '#009387',
              borderWidth: 1,
              marginTop: 15
            }]}
            onPress={() => {loginHandle( data.username, data.password )}}
          >
            <View
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {
                color: '#009387'
              }]}>Sign In</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('SignUp')}
            style={[styles.signIn, {
              borderColor: '#009387',
              borderWidth: 1,
              marginTop: 15
            }]}
          >
            <Text style={[styles.textSign, {
              color: '#009387'
            }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

