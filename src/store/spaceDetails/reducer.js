const initialState = {
  loading: true,
  space: [],
};

//case name and type from actions need to be the same

export default function spaceDetailsliceReducer(state = initialState, action) {
  switch (action.type) {
    case "spaceDetails/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }

    case "spaceDetails/spaceDetailsFetched": {
      return {
        ...state,

        space: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
