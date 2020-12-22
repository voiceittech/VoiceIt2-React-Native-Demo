# React Native Demo

## Getting started

Clone the Repo
- ```npm install```
- Navigate to App.js in the root folder, and change the ```options``` object with the desired entries, such as the ```api key/token, userId, content_language``` etc
```
const options = {
  user_id: "USER_ID_HERE",
  group_id: "GROUP_ID_HERE",
  content_language: "CONTENT_LANGUAGE_HERE",
  phrase: "PHRASE",
  apiKey: "API_KEY_HERE",
  apiToken: "API_TOKEN_HERE",
  liveness: false
  };
  ```
- run ```react-native run-ios``` (make sure to cd into ios folder and run ```pod install``` before) or ```react-native run-android``` depending on your device
- IOS Screenshot
<br>
<img src="/res/ios.jpeg" width=300px></img>
- Android Screenshot
<br>
<img src="/res/android.png" width=300px></img>

