import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 24,
    },
  });

function HomePage({ navigation }) {
    return (
        <View
        style={styles.container}
        >            
                <Text
                  style={styles.text}
                >
                    Welcome
                </Text>
                <Button 
                    title="Go to Team Groups" 
                    onPress= {() => navigation.navigate('TeamGroups')}
                />
        </View>        
    )
}

export default HomePage;