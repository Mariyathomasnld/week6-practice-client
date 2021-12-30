import axios from "axios";
import { apiUrl } from "../../config/constants";

export const start_Loading = () => {
  return {
    type: "spaces/startLoading",
  };
};

export const spaces_Fetched = (data) => {
  return {
    type: "spaces/spacesFetched",
    payload: data,
  };
};





export const fetchAllSpaces = async (dispatch, getState) => {
  try {
    const offset = getState().allspaces.spaces.length;
    const response = await axios.get(
      `${apiUrl}/spaces?offset=${offset}&limit=5`
    );

    console.log(response);
    dispatch(spaces_Fetched(response.data));
  } catch (e) {
    console.log(e.message);
  }
};


