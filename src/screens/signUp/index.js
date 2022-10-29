/* eslint-disable */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,ScrollView,
} from "react-native";
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import { styles } from "./styles";
import validators from "../../../util/validators";

const SignUpScreen = ({navigation}) => {

  // set of form data
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
    address: '',
    zipCode: '',
    password: '',
    confirmPassword: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidLastName: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
    isValidEmail: true,
    isValidMobile: true,
    isValidDob: true,
    isValidAddress: true,
    isValidZipCode: true
  });

  const { colors } = useTheme();

  // signup function
  const handleSignUp = ()=> {
    if (data.isValidUser && data.isValidLastName && data.isValidConfirmPassword && data.isValidPassword && data.isValidZipCode && data.isValidAddress && data.isValidMobile && data.isValidEmail
    && data.firstName!= '' && data.lastName!= '' && data.email!= '' && data.mobileNumber!= '' && data.address!= '' && data.zipCode!= '' && data.password!= '' && data.confirmPassword!= '' ) {
      navigation.navigate('SignIn')
    }
    else {
      alert('Please fill form properly')
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
    if( val.match(validators.name) ) {
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

  // user's last name validation
  const handleValidLastName = (val) => {
    if( val.match(validators.name) ) {
      setData({
        ...data,
        isValidLastName: true
      });
    } else {
      setData({
        ...data,
        isValidLastName: false
      });
    }
  }

  //password validation
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

  // confirm password validation
  const handleConfirmPassword = (val) => {
    if( val.match(validators.password) && val === data.password) {
      setData({
        ...data,
        confirmPassword: val,
        isValidConfirmPassword: true
      });
    } else {
      setData({
        ...data,
        confirmPassword: val,
        isValidConfirmPassword: false
      });
    }
  }

  // email validation
  const handleValidEmail = (val) => {
    if( val.match(validators.email) ) {
      setData({
        ...data,
        password: val,
        isValidEmail: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidEmail: false
      });
    }
  }

  // mobile validation
  const handleValidMobile = (val) => {
    if( val.match(validators.phone) ) {
      setData({
        ...data,
        password: val,
        isValidMobile: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidMobile: false
      });
    }
  }

  // address validation
  const handleValidAddress = (val) => {
    if( val.match(validators.address) ) {
      setData({
        ...data,
        password: val,
        isValidAddress: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidAddress: false
      });
    }
  }

  // zip code validation
  const handleValidZipCode = (val) => {
    if( val.match(validators.postal_code) ) {
      setData({
        ...data,
        password: val,
        isValidZipCode: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidZipCode: false
      });
    }
  }

  // rendering the ui
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <ScrollView>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {
          backgroundColor: colors.background
        }]}
      >
        <Text style={[styles.text_footer, {
          color: colors.text
        }]}>First Name</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            style={[styles.textInput, {
              color: colors.text
            }]}
            autoCapitalize="none"
            onChangeText={(val) => setData({...data, firstName: val})}
            onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
          />
        </View>
        { data.isValidUser ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Enter Valid Name</Text>
          </Animatable.View>
        }
        <Text style={[styles.text_footer, {
          color: colors.text
        }]}>Last Name</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            style={[styles.textInput, {
              color: colors.text
            }]}
            autoCapitalize="none"
            onChangeText={(val) => setData({...data, lastName: val})}
            onEndEditing={(e)=>handleValidLastName(e.nativeEvent.text)}
          />
        </View>
        { data.isValidLastName ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Enter valid Name</Text>
          </Animatable.View>
        }
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
            onChangeText={(val) => setData({...data, email: val})}
            onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}
          />
        </View>
        { data.isValidEmail ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Enter a valid Email.</Text>
          </Animatable.View>
        }

        <Text style={[styles.text_footer, {
          color: colors.text
        }]}>Mobile</Text>
        <View style={styles.action}>
          <FontAwesome
            name="mobile"
            color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="Your mobile"
            placeholderTextColor="#666666"
            style={[styles.textInput, {
              color: colors.text
            }]}
            autoCapitalize="none"
            onChangeText={(val) => setData({...data, mobileNumber: val})}
            onEndEditing={(e)=>handleValidMobile(e.nativeEvent.text)}
          />
        </View>
        { data.isValidMobile ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Enter valid mobile.</Text>
          </Animatable.View>
        }


        <Text style={[styles.text_footer, {
          color: colors.text
        }]}>Address</Text>
        <View style={styles.action}>
          <FontAwesome
            name="address-book"
            color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="Your Address"
            placeholderTextColor="#666666"
            style={[styles.textInput, {
              color: colors.text
            }]}
            autoCapitalize="none"
            onChangeText={(val) => setData({...data, address: val})}
            onEndEditing={(e)=>handleValidAddress(e.nativeEvent.text)}
          />
        </View>
        { data.isValidAddress ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Enter Valid Address</Text>
          </Animatable.View>
        }

        <Text style={[styles.text_footer, {
          color: colors.text
        }]}>Zip Code</Text>
        <View style={styles.action}>
          <FontAwesome
            name="address-book"
            color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="Your Zip Code"
            placeholderTextColor="#666666"
            style={[styles.textInput, {
              color: colors.text
            }]}
            autoCapitalize="none"
            onChangeText={(val) => setData({...data, zipCode: val})}
            onEndEditing={(e)=>handleValidZipCode(e.nativeEvent.text)}
          />
        </View>
        { data.isValidZipCode ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Enter Valid Zip Code.</Text>
          </Animatable.View>
        }

        <Text style={[styles.text_footer, {
          color: colors.text,
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
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
          </Animatable.View>
        }

        <Text style={[styles.text_footer, {
          color: colors.text,
        }]}>Confirm Password</Text>
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
            onChangeText={(val) => handleConfirmPassword(val)}
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
        { data.isValidConfirmPassword ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password won't match.</Text>
          </Animatable.View>
        }
        <View style={styles.button}>

          <TouchableOpacity
            onPress={() => handleSignUp()}
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

          <TouchableOpacity
            style={[styles.signIn, {
              borderColor: '#009387',
              borderWidth: 1,
              marginTop: 15
            }]}
            onPress={()=> navigation.navigate('SignIn')}
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
        </View>
      </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

