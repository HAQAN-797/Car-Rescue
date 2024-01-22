import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Background from './Background';
import { redBrown , black} from './Constants';
import Btn from './Btn';
const Home = (props) => {
  return (
    <Background>
    
        <View style={styles.content}>
        
          
        </View>
        <View style={styles.taglineContainer}>
          
        <Btn bgColor={ redBrown} textColor='white' btnLabel="Start Engine" Press={()=>props.navigation.navigate("Login")}/>
       
     
        <View style={styles.bottomTabs}>
        
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  content: {
    marginTop: 'auto', // Pushes content to top
    alignItems: 'center',
  },
  header: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial', // Replace with your preferred font family
  },
  subHeader: {
    color: 'white',
    fontSize: 32,
   
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Arial', // Replace with your preferred font family
  },
  taglineContainer: {
    marginBottom: 20,
  },
  tagline: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Arial', // Replace with your preferred font family
  },
  bottomTabs: {
    /* Styles for your bottom tabs component */
  },
});

export default Home;
