import React from'react';
import { Button, Text, View } from'react-native';
import SignIn from './SignIn';

function TeamGroups({ navigation}) {
    return (
        <View style={{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center'
            }}
        > 
            <Text
              style={{
              fontSize: 20, 
              fontWeight: 'bold',
              padding: 10
             }}
            >
                Its a team groups page!
            </Text>
            <Button
                title="Go to sing in"
                onPress={() => navigation.navigate(SignIn)}
            />
        </View>        
    )
}

export default TeamGroups;