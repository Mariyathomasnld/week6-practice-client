import axios from "axios";
import { apiUrl } from "../../config/constants";

export const start_Loading = () => {
  return {
    type: "spaceDetails/startLoading",
  };
};

const space_Details_Fetched = (data) => ({
  type: "spaceDetails/spaceDetailsFetched",
  payload: data,
});

export const fetchSpaceById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/spaces/${id}`);
      console.log(response);
      dispatch(space_Details_Fetched(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
