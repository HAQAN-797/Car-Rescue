//import liraries
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { redBrown } from './Constants';

// create a component
const Field = (props) => {
    return (
        <TextInput
            {...props} // Spread the props to the TextInput
            style={{
                borderColor: redBrown, 
                borderRadius: 100,
        alignItems: 'center',
        width: 350,
        paddingVertical: 5,
        marginVertical: 10,
                backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 45, // Adjust the paddingRight for more space on the right
        borderWidth: 1,
        borderRadius: 30,
       
        height: 40,// Set the height for the horizontal input// Adjust text color as needed
                // Add other styles if needed
            }}
        />
    );
};

// define your styles (unused in this component)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Field;
