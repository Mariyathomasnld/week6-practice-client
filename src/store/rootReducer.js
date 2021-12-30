import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import spacessliceReducer from "./spaces/reducer";
import spaceDetailsliceReducer from "./spaceDetails/reducer";

const reducer = combineReducers({
  appState,
  user,
  allspaces: spacessliceReducer,
  detailSpace: spaceDetailsliceReducer,
});

export default reducer;
