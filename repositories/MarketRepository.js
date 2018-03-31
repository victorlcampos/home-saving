const MarketRepository = (() => {
    let state = [];

    return {
      state: state,
      list: () => {
        return state;
      },
      get: (id) => {
        return state.find((i) => i.id == id);
      },
      add: (market) => {
        state = [
          market,
          ...state,
        ]

        return state
      }
    }
})();

export { MarketRepository };
