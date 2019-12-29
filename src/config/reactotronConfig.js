import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '172.20.10.2' })
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();
  tron.clear();
  console.tron = tron;
}
