import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight } from 'react-native';
import * as firebase from 'firebase';
import firebaseApp from '../../config/localFirebase';

export default class RegisterNumber extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.submittEmailToCreateNewProfile = this.submittEmailToCreateNewProfile.bind(this);
  }

  componentDidMount() {
    var database = firebase.database();
    database.ref('users/').set({
      username: 'name',
      email: 'email',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(email) => this.setState({ email })}
          placeholder={ 'write your e-mail' }
          underlineColorAndroid= 'rgba(0,0,0,0)'
        />
        <TextInput
          style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(password) => this.setState({ password })}
          placeholder={ 'password' }
          underlineColorAndroid= 'rgba(0,0,0,0)'
        />

        <TouchableHighlight onPress={this.submittEmailToCreateNewProfile}>

          <View>
            <Text>Submitt</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  submittEmailToCreateNewProfile() {
    const { email, password } = this.state;
    if (email && password)
    {
      alert(email + password);
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    }
  };
  fun1() {
    alert('hello');
  };
  fun1.then(()=>{
    alert('what is up')
  })
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,

  },

});
