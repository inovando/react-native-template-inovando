import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .connect()
  .clear();

const forwardConsole = console.log;

console.log = (...args) => {
  forwardConsole(...args);

  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};
