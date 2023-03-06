import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen"
import CreateScreen from "../screens/CreateScreen"

const tabIconHomeSelect = require('../assets/img/icons-home-page-1.png')
const tabIconHomeNoSelect = require('../assets/img/icons-home-page-2.png')
const tabIconSettingSelect = require('../assets/img/icons-settings-1.png')
const tabIconSettingNoSelect = require('../assets/img/icons-settings-2.png')

const tabNavigationData = [
  {
    id: 1,
    name: 'Home',
    component: HomeScreen,
    iconSelect: tabIconHomeSelect,
    iconNoSelect: tabIconHomeNoSelect,
  },
  {
    id: 2,
    name: 'Create',
    component: CreateScreen,
  },
  {
    id: 3,
    name: 'Setting',
    component: SettingsScreen,
    iconSelect: tabIconSettingSelect,
    iconNoSelect: tabIconSettingNoSelect,
  },
];

export default tabNavigationData;