import { AsyncStorage } from 'react-native';
import ID from '../utils/id';

const MarketEntryRepository = (() => {
  const list = (marketId) => {
    return AsyncStorage.getItem('MarketEntries:'+marketId)
                       .then((marketEntries) => {
                         return marketEntries === null ? [] : JSON.parse(marketEntries)
                       })
  };

  const get = (marketId, id) => {
    return list(marketId).then(
      (makets) => {
        return makets.find( m => m.id === id )
      }
    )
  };

  const add = (marketId, entry) => {
    return list(marketId).then(
      (marketEntries) => {
        const id        = ID();
        const new_entry = {...entry, id};
        const state     = [new_entry, ...marketEntries];

        console.log('state', state);

        AsyncStorage.setItem('MarketEntries:'+marketId, JSON.stringify(state));

        return state;
      }
    )
  }

  const update = (marketId, entry) => {
    return list(marketId).then(
      (marketEntries) => {
        const state = marketEntries.map( (e) => e.id === entry.id ? entry : e );

        AsyncStorage.setItem('MarketEntries:'+marketId, JSON.stringify(state));

        return state;
      }
    );
  }

  return {
    list,
    get,
    add,
    update
  }
})();

export { MarketEntryRepository };
