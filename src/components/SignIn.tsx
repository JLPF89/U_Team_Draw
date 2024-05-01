import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 24
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: '#eee',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 4,
        marginBottom: 30
    },
});

const [showModal, setShowModal] = useState(false);

function SignIn ({navigation}) {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const signInHandler = () => {
    if(validateEmail(email) && password.length > 8) {
         navigation.navigate('TeamGroups');
        } else  if (validateEmail(email) === false) {
            alert('Please enter a valid email');
        } else {
            alert('Password must be longer than 8 characters');
        }
    }

  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Please enter your email"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Please enter your password"
          secureTextEntry
        />
      </View>

      <Button 
        title="Sign In"
        onPress={signInHandler}
        disabled= {!validateEmail(email) || password.length < 8}
        />
      <Button
        title="Important Information"
        onPress={() => setShowModal(true)}
      />
      <Modal
        visible={showModal}
        animationType="slide"
      >
        <View style={styles.container}>
            <Text style={styles.title}>Invalid Credentials</Text>
            <Button
                title="OK" onPress={()=>setShowModal(false)}/>
        </View>
      </Modal>
    </View>
  );
}

export default SignIn