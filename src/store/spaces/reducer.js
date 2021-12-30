const initialState = {
  loading: true,
  spaces: [],
};

//case name and type from actions need to be the same

export default function spacessliceReducer(state = initialState, action) {
  switch (action.type) {
    case "spaces/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }

    case "spaces/spacesFetched": {
      return {
        ...state,

        spaces: [...state.spaces, ...action.payload],
      };
    }
    

    default: {
      return state;
    }
  }
}
