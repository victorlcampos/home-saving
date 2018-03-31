import { StackNavigator } from 'react-navigation';

import MarketListScreen from '../screens/MarketListScreen';
import MarketFormScreen from '../screens/MarketFormScreen';
import MarketEntryListScreen from '../screens/MarketEntryListScreen';
import MarketEntryFormScreen from '../screens/MarketEntryFormScreen';

export default StackNavigator(
  {
    MarketList: {
      screen: MarketListScreen,
      navigationOptions: (props) => ({
        title: 'Market List',
      })
    },
    MarketForm: {
      screen: MarketFormScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Entry Form'
      })
    },
    MarketEntrytList: {
      screen: MarketEntryListScreen,
      navigationOptions: (props) => ({
        title: 'Market Entry List',
      })
    },
    MarketEntrytForm: {
      screen: MarketEntryFormScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Entry Form'
      })
    }
  },
  {
    initialRouteName: 'MarketList'
  }
);
