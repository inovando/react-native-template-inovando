import 'react-native-gesture-handler';
if (__DEV__) {
  import('config/reactotron');
}
import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
