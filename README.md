# Beta - Voiceit API 2.0 React Native Demo and Module

This react-native module uses our Android and iOS SDKs to provide voice, video, and face enrollment/verification/identification functionality that can be easily implemented in React Native projects. Please look at the <a href="https://github.com/voiceittech/VoiceItApi2AndroidSDK">Android</a> and <a href="https://github.com/voiceittech/VoiceItApi2AndroidSDK">iOS</a> SDKs for further information.

* [Demo](#demo)
     * [Screenshots](#screenshots)
          * [Android](#android)
          * [iOS](#ios)
  * [Credentials](#credentials)
  * [Configuration](#configuration)
  * [Running the Demo](#running-the-demo)
* [Incorporating the Module](#incorporating-the-module)
    * [Android](#android-module)
        * [Get the Module](#get-the-module)
        * [Access Module Methods](#access-module-methods)
            * [Initialize Module](#initialize-the-module)
        * [Encapsulated Action Methods](#encapsulated-action-methods)
        * [API Wrapper Methods](#api-wrapper-methods)
    * [iOS](#ios-module)

## Demo 
### Screenshots 

<img width="200px" src="./graphics/ui.png" style="display: inline !important"/>

#### Android 
<img width="215px" src="./graphics/voiceAndroid.gif" style="display: inline !important; padding: 50px !important"/><img width="200px" src="./graphics/faceVerificationAndroid.gif" style="display: inline-block !important;"/><img width="200px" src="./graphics/videoVerificationAndroid.gif" style="display: inline-block !important;"/>

#### IOS

Coming soon!
### Credentials
Before unpacking the repo, please make sure to create a Developer account at https://voiceit.io/signup. Upon completion,
login and navigate to the "Settings tab" to view your API Key and Token, both of which will be needed later on. Then navigate to the "User Management" tab and click "Create a User". This will create a user with a User ID which will be used later in the examples.
### React Native CLI
Please make sure you have Node JS installed. You can use npm to easily get the react-native cli: 
```
npm install -g react-native-cli
```
This is required to pack and run the application.
### Configuration
If you do not have an ANDROID_HOME environment variable, create the file "local.properties" in the android/ directory and add a line like below, pointing to your Android SDK installation:
```
sdk.dir=/Users/USER_NAME_HERE/Library/Android/sdk
```


Inside the root directory, please open the file App.js. From line 9 onwards, edit the options object to add details such as your API key and token, user id, group id, content language, phrase, and liveness boolean: 
```
const options = {
  user_id: "USER_ID_HERE",
  group_id: "GROUP_ID_HERE",
  content_language: "CONTENT_LANGUAGE_HERE",
  phrase: "PHRASE_HERE",
  apiKey: "API_KEY_HERE",
  apiToken: "API_TOKEN_HERE",
  liveness: false
  };
  ```
### Running the Demo
After the configuration step, open terminal/cmd and cd into the root directory. We have to install the react-native modules before running the application. Type: 
```
npm install
```

This will bring the required dependencies to node_modules. Next step is to "link" the voiceit react native module to the app:
```
react-native link voiceit-react-native
```

Please connect your device to your machine. 
<ul>
 <li>Android: 
  Please make sure you have the <a href="https://developer.android.com/studio/">Android development environment set up</a>, and Android SDK 9 (Pie) installed. 
From the main project folder, run the applicaion by typing this in terminal/cmd
  
```
react-native run-android 
```

<li>iOS:
    Coming Soon!

 </li>
</ul>


### Incorporating the Module

#### Android Module

##### Get the Module
The voiceit-reat-native module can be obtained through npm. Run ```npm install voiceit-react-native --save``` to get the module, and have it saved into your project's package.json
The module needs to be linked to the project:
```
react-native link voiceit-react-native
```
The voiceit-react-native module uses our <a href="https://github.com/voiceittech/VoiceItApi2AndroidSDK">Android SDK</a>. Jitpack can be used to implement the SDK into the the project. Open the folder $your_project_root_folder/android in Android studio. Use <a href="https://jitpack.io/#voiceittech/VoiceItApi2AndroidSDK">jitpack</a> to implement the Voiceit Android SDK.

 
##### Access Module methods
To access the module methods, navigate to $Your_Project_Root/App.js. The Module will be wrapped up inside React Native's built-in <a href="https://facebook.github.io/react-native/docs/native-modules-android"> Native Modules</a> object. 
Inside App.js, import the Native Modules: 
```
import {NativeModules} from 'react-native';
```
We recommending creating an instance of the VoiceIt Module; 
```
const voiceItModule = NativeModules.VoiceIt;
```
###### Initialize the Module 
```
voiceItModule.initVoiceIt("API_KEY_HERE", "API_TOKEN_HERE");
```
##### Encapsulated Action Methods 

###### Start Voice Enrollment
```
voiceItModule.encapsulatedVoiceEnrollment("USER_ID", "CONTENT_LANGUAGE", "PHRASE", (res)=>{
    //This is the Callback. Handle result here 
    });
```
###### Start Voice Verification
```
voiceItModule.encapsulatedVoiceVerification("USER_ID", "CONTENT_LANGUAGE", "PHRASE", (res)=>{
    //This is the Callback. Handle result here 
    });
```
###### Start Voice Identification 
```
voiceItModule.encapsulatedVoiceIdentification("GROUP_ID", "CONTENT_LANGUAGE", "PHRASE", (res)=>{
    //This is the Callback. Handle result here 
    });
```

###### Start Face Enrollment
```
voiceItModule.encapsulatedFaceEnrollment("USER_ID",(res)=>{
    //This is the Callback. Handle result here 
    });
```
###### Start Face Verification
```
voiceItModule.encapsulatedFaceVerification("USER_ID", LIVENESS_BOOLEAN, (res)=>{
    //This is the Callback. Handle result here 
    });
```

###### Start Face Identification 
```
voiceItModule.encapsulatedFaceIdentification("GROUP_ID", LIVENESS_BOOLEAN, (res)=>{
    //This is the Callback. Handle result here 
    });
```

###### Start Video Enrollment
```
voiceItModule.encapsulatedVideoEnrollment("USER_ID", "CONTENT_LANGUAGE", "PHRASE", (res)=>{
    //This is the Callback. Handle result here 
    });
```

###### Start Video Verification
```
voiceItModule.encapsulatedVideoVerification("USER_ID", "CONTENT_LANGUAGE", LIVENESS_BOOLEAN, "PHRASE", (res)=>{
    //This is the Callback. Handle result here 
    });
```

###### Start Video Identification 
```
voiceItModule.encapsulatedVideoIdentification("GROUP_ID", "CONTENT_LANGUAGE", LIVENESS_BOOLEAN, "PHRASE", (res)=>{
    //This is the Callback. Handle result here 
    });
```

##### API Wrapper Methods
For a list of all methods, please look at the <a href="https://api.voiceit.io"> API Documentation</a> 

###### Get All Users 
```
voiceItModule.getAllUsers(res)=>{
    //This is the Callback. Handle result here 
    });
```
###### Create User
```
voiceItModule.createUser(res)=>{
    //This is the Callback. Handle result here 
    });
```
###### Check User Exists
```
voiceItModule.checkUserExists("USER_ID_HERE", res)=>{
    //This is the Callback. Handle result here 
    });
```
###### Delete user 
```
voiceItModule.deleteUser("USER_ID_HERE", res)=>{
    //This is the Callback. Handle result here 
    });
```
###### Get Groups For User
```
voiceItModule.getGroupsForUser("USER_ID_HERE", res)=>{
    //This is the Callback. Handle result here 
    });
```
###### Get All Groups 
```
voiceItModule.deleteUser(res)=>{
    //This is the Callback. Handle result here 
    });
```
###### Get Group 
```
voiceItModule.getGroup("USER_ID_HERE", res)=>{
    //This is the Callback. Handle result here 
    });
```
###### Check Group Exists 
```
voiceItModule.groupExists("USER_ID_HERE", res)=>{
    //This is the Callback. Handle result here 
    });
```
###### Create Group 
```
voiceItModule.createGroup("GROUP_DESCRIPTION", res)=>{
    //This is the Callback. Handle result here 
    });
```
###### Add User to Group
```
voiceItModule.addUserToGroup("GROUP_ID","USER_ID", res)=>{
    //This is the Callback. Handle result here 
    });
```

###### Remove User From Group
```
voiceItModule.removeUserFromGroup("GROUP_ID","USER_ID", res)=>{
    //This is the Callback. Handle result here 
    });
```
###### Delete group
```
voiceItModule.deleteGroup("GROUP_ID_HERE", res)=>{
    //This is the Callback. Handle result here 
    });
```


#### IOS Module
Coming soon!
