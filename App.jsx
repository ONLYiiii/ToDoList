import 'react-native-gesture-handler';

import {DataProvider} from './src/hooks';
import AppNavigation from './src/navigation/Navigator';

export default function App() {
  return (
    <DataProvider>
      <AppNavigation />
    </DataProvider>
  );
}