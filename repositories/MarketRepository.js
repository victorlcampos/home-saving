import { AsyncStorage } from 'react-native';
import ID from '../utils/id';
import {MarketEntryRepository} from './MarketEntryRepository';

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
        const id         = ID();
        const new_market = {id, ...market};

        const lastMarketId = markets[0] !== undefined ? markets[0].id : undefined;

        const state = [new_market, ...markets];

        AsyncStorage.setItem('Markets', JSON.stringify(state))
                    .then((_) => {
                      if(lastMarketId !== undefined)
                      {
                        MarketEntryRepository.list(lastMarketId).then((entries) => {
                          console.log('entries', entries);
                          const newEntries = entries.forEach((entry) => {
                            entry.checked = false;
                            MarketEntryRepository.add(id, entry);
                          });
                        })
                      }
                    });

        return state;
      }
    )
  };


  const remove = (marketId) => {
    AsyncStorage.multiRemove(['MarketEntries:'+marketId], (err) => {
            console.log('err', marketId);
          });

    return list().then(
        (markets) => {
          const state = markets.filter( (market) => market.id !== marketId );
          AsyncStorage.setItem('Markets', JSON.stringify(state));

          return state;
        }
      )
  }
  return {
    list,
    get,
    add,
    remove
  }
})();

export { MarketRepository };
