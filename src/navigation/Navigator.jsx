import { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import RootNavigator from './RootNavigator';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useData} from '../hooks';

SplashScreen.preventAutoHideAsync();

const Navigator = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const {theme} = useData();

  const [fontsLoaded] = useFonts({
    'Kanit-Regular': theme.assets.KanitRegular,
    'Kanit-Medium': theme.assets.KanitMedium,
    'Kanit-SemiBold': theme.assets.KanitSemiBold,
    'Kanit-ExtraBold': theme.assets.KanitExtraBold,
    'Kanit-Bold': theme.assets.KanitBold,
    'Sarabun-Regular': theme.assets.SarabunRegular,
    'Sarabun-Medium': theme.assets.SarabunMedium,
    'Sarabun-SemiBold': theme.assets.SarabunSemiBold,
    'Sarabun-Bold': theme.assets.SarabunBold,
    'Sarabun-ExtraBold': theme.assets.SarabunExtraBold,
  })

  useEffect(() => {
    async function prepare() {
      try {
        setAppIsReady(true);
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) { 
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  const config = {
    strictMode: 'warn',
  };

  if (!appIsReady && !fontsLoaded) {
    return null
  } else {
    onLayoutRootView()
    return (
      <NativeBaseProvider config={config}>
        {/* <ThemeProvider theme={theme} setTheme={setTheme}> */}
          <NavigationContainer> 
            <RootNavigator />
          </NavigationContainer>
        {/* </ThemeProvider> */}
      </NativeBaseProvider>
    )
  }
}

export default Navigator
