import { AsyncStorage } from 'react-native';
import _ from 'lodash';

const MarketRepository = (() => {
  const list = () => {
    return AsyncStorage.getItem('Markets').then((markets) => {
      return markets === null ? [] : JSON.parse(markets)
    }) ;
  };

  const get = (id) => {
    return list().then(
      (makets) => {
        return makets.find( m => m.id === id )
      }
    );
  };

  const add = (market) => {
    return list().then(
      (markets) => {
        const id         = _.uniqueId('id');
        const new_market = {id, ...market};

        const state = [new_market, ...markets];

        AsyncStorage.setItem('Markets', JSON.stringify(state));

        return state;
      }
    )
  };

  return {
    list,
    get,
    add
  }
})();

export { MarketRepository };
