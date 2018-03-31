const MarketEntryRepository = (() => {
    let state = [];

    return {
        list: (marketId) => {
          console.log('marketId', marketId);

          return state.filter((e) => e.marketId == marketId );
        },
        get: (id) => {
          return state.find((i) => i.id == id);
        },
        add: (marketId, entry) => {
          newEntry = {...entry, marketId};

          console.log(newEntry);

          state = [
            newEntry,
            ...state,
          ]

          return state.filter((e) => e.marketId == marketId );
        },
        update: (marketId, entry) => {
          state = state.map( (e) => e.id === entry.id ? entry : e )
          return state.filter((e) => e.marketId == marketId );
        }
      }
  })();

export { MarketEntryRepository };
