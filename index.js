
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Dashboard from './views/Dashboard';
import ForgotPassword from './views/ForgotPassword';


AppRegistry.registerComponent(appName, () => Dashboard);
