import {NativeModules} from 'react-native';
import { ButtonGroup,CheckBox} from 'react-native-elements';
import React, {Component} from 'react';
import {Platform, TouchableOpacity,StyleSheet, Image, Text, View} from 'react-native';
import logo from "./res/logo.png";

const voiceItModule = NativeModules.Voiceit2ReactNative;
const options = {
  user_id: "usr_e1db79901fd0418781dfc9c22ec48df4",
  group_id: "GROUP_ID_HERE",
  content_language: "EN_US",
  phrase: "Tomorrow is a good day to go for a walk",
  apiKey: "key_204413831ca34dc7a692338260eb41ea",
  apiToken: "tok_b855f16643e74b88b2dc50d8b681d4e2",
  liveness: false
  };
voiceItModule.initVoiceIt(options.apiKey, options.apiToken);

export default class App extends Component{
  constructor () {
    super();
    this.state = {
      checked: false,
      index: 0
    }
  }
  render() {
    return(
      <View style={styles.container}>
      <Image resizeMode='contain' style={styles.image} source={logo}/>
      <CheckBox
      activeOpacity = {.7}
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      title='Liveness Detection'
      checked={this.state.checked}
      wrapperStyle={styles.checkbox}
      onPress={()=>{this.setState({ checked: !this.state.checked }); console.log(this.state.checked);}}
      />
      <View style={styles.buttonPanel}>
      <TouchableOpacity
        activeOpacity = {.65}
        style={this.state.index == 0 ? styles.selectedPanel : styles.unselectedPanel}
        onPress={()=>{this.setState({ index: 0});}}>
       <Text style={{color:'#000000'}}>Voice</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity = {.65}
        style={this.state.index == 1 ? styles.selectedPanel : styles.unselectedPanel}
        onPress={()=>{this.setState({ index: 1});}}>
       <Text style={{color:'#000000'}}>Face</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity = {.65}
        style={this.state.index == 2 ? styles.selectedPanel : styles.unselectedPanel}
        onPress={()=>{this.setState({ index: 2});}}>
       <Text style={{color:'#000000'}}>Video</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.action}>
      <Action liveness={this.state.checked} index={this.state.index}></Action>
      </View>
      </View>
    );
  }
}

class Action extends Component {
  enrollVoice(callback){
    voiceItModule.encapsulatedVoiceEnrollment(options.user_id,options.content_language, options.phrase, (res)=>{callback(res);});
  }
  verifyVoice(callback){
    voiceItModule.encapsulatedVoiceVerification(options.user_id,options.content_language, options.phrase, (res)=>{callback(res);});
  }
  identifyVoice(callback){
    voiceItModule.encapsulatedVoiceIdentification(options.group_id,options.content_language, options.phrase, (res)=>{callback(res);});
  }
  enrollFace(callback){
      voiceItModule.encapsulatedFaceEnrollment(options.user_id,(res)=>{callback(res);});
  }
  verifyFace(callback){
      voiceItModule.encapsulatedFaceVerification(options.user_id,this.props.liveness,(res)=>{callback(res);});
  }
  identifyFace(callback){
      voiceItModule.encapsulatedFaceIdentification(options.group_id,this.props.liveness,(res)=>{callback(res);});
  }
  enrollVideo(callback){
    voiceItModule.encapsulatedVideoEnrollment(options.user_id,options.content_language, options.phrase,(res)=>{callback(res);});
  }
  verifyVideo(callback){
    voiceItModule.encapsulatedVideoVerification(options.user_id,options.content_language,this.props.liveness, options.phrase,(res)=>{callback(res);});
  }
  identifyVideo(callback){
    voiceItModule.encapsulatedVideoIdentification(options.group_id,options.content_language,this.props.liveness, options.phrase,(res)=>{callback(res);});
  }
  resolveEnrollment(index, callback){
    if (index == 0){
      this.enrollVoice((res)=>{callback(res);});
    } else if (index == 1){
      this.enrollFace((res)=>{callback(res);});
    } else {
      this.enrollVideo((res)=>{callback(res);});
    }
  }
  resolveVerification(index, callback){
    if (index == 0){
      this.verifyVoice((res)=>{callback(res);});
    } else if (index == 1){
      this.verifyFace((res)=>{callback(res);});
    } else {
      this.verifyVideo((res)=>{callback(res);});
    }
  }
  resolveIdentification(index, callback){
    if (index == 0){
      this.identifyVoice((res)=>{callback(res);});
    } else if (index == 1){
      this.identifyFace((res)=>{callback(res);});
    } else {
      this.identifyVideo((res)=>{callback(res);});
    }
  }
  render() {
  return (
    <View>
      <View>
        <TouchableOpacity
          activeOpacity = {.5}
          style={[styles.button]}
          onPress={() => this.resolveEnrollment(this.props.index, (res)=>{console.log(res);})}>
         <Text style={{color:'#000000'}}>Enrollment</Text>
        </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity = {.5}
            style={[styles.button]}
            onPress={() => this.resolveVerification(this.props.index, (res)=>{console.log(res);})}>
           <Text style={{color:'#000000'}}>Verification</Text>
          </TouchableOpacity>
          </View>
          <View>
          {options.group_id == "" ? null  : options.group_id.substring(0,4) == "grp_" ?
            <TouchableOpacity
              activeOpacity = {.5}
              style={[styles.button]}
              onPress={() => this.resolveIdentification(this.props.index, (res)=>{console.log(res);})}>
             <Text style={{color:'#000000'}}>Identification</Text>
            </TouchableOpacity> : null
          }
            </View>
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#494949",
    justifyContent: "center",
    marginTop: -100
  },
  action: {
    margin:20
  },
  button: {
    borderRadius: 7,
    borderColor: '#eeeeee',
    padding: 13,
    alignItems: 'center',
    margin: 7,
    backgroundColor: '#eeeeee'
  },
  selectedPanel:{
    paddingHorizontal:25,
    paddingVertical: 15,
    backgroundColor: "rgba(238,238,238,0.65)"
  },
  unselectedPanel:{
    paddingHorizontal:25,
    paddingVertical: 15,
    backgroundColor: "rgb(238,238,238)"
  },
  buttonPanel: {
    flexDirection: "row",
    marginTop: 10
  },
  image: {
    width: '75%',
    height: '20%'
  }
});
