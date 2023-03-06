import 'react-native-gesture-handler';

import {DataProvider} from './src/hooks';
import AppNavigation from './src/navigation/Navigator';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Require cycle: node_modules/']);

export default function App() {
  return (
    <DataProvider>
      <AppNavigation />
    </DataProvider>
  );
}