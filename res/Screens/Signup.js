//import libraries
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Background from './Background';
import { black, redBrown } from './Constants';
import Field from './field';
import Btn from './Btn';

// create a component
const Signup = (props) => {
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Signup
                </Text>
                <View
                    style={{
                        backgroundColor: 'white',
                        height: 700,
                        width: 460,
                        borderTopLeftRadius: 220,
                        paddingTop: 10, // Adjust top padding for the texts to be higher
                        alignItems: 'center',
                        justifyContent: 'flex-start', // Align content at the top
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: 4,
                        elevation: 5,
                        // Add more styling as needed
                    }}
                >
                    <Text style={{ fontSize: 40, color: redBrown, fontWeight: 'bold', marginTop: 10 }}>
                        Register
                    </Text>
                    <Text
                        style={{
                            color: 'grey',
                            fontSize: 19,
                            fontWeight: 'bold',
                            marginBottom: 20,
                        }}
                    >
                        Create your account
                    </Text>
                    <Field underlineColorAndroid="#f000"
                        placeholder="Enter UserName"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="sentences"
                        returnKeyType="next"
                        keyboardType="default"
                    />

                    <Field underlineColorAndroid="#f000"
                        placeholder="Enter Email"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="sentences"
                        returnKeyType="next"
                        keyboardType="email-address"
                    />

                    <Field underlineColorAndroid="#f000"
                        placeholder="Enter password"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="sentences"
                        returnKeyType="next"
                        secureTextEntry={true}
                    />
                    <Field underlineColorAndroid="#f000"
                        placeholder="Enter Contanct Number"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="sentences"
                        returnKeyType="next"
                       
                    />
                    <Field underlineColorAndroid="#f000"
                        placeholder="Enter Contanct Vehicle Name"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="sentences"
                        returnKeyType="next"
                       
                    />

<Field underlineColorAndroid="#f000"
                        placeholder="Enter Contanct Vehicle Number"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="sentences"
                        returnKeyType="next"
                       
                    />
                    <Btn textColor='white' bgColor={redBrown} btnLabel="Signup" 
                     Press={() => {
              alert('Accoutn created');
              props.navigation.navigate('Login');
            }}
                     />
                    <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>  Already have an account ?{' '}</Text>
            <TouchableOpacity  onPress={() => props.navigation.navigate('Login')}>
            <Text style={{ color: redBrown, fontWeight: 'bold', fontSize: 16 }}>Login</Text>
            </TouchableOpacity>
          </View>
                </View>
            </View>
        </Background>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50, // Adjust the top padding for positioning
    },
    title: {
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',

    },
    // Other styles for login content
});

//make this component available to the app
export default Signup;
