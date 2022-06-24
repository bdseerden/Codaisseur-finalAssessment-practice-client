import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";
import { fetchedAllSpaces, fetchedSpaceDetails } from "./slice";

export const fetchSpaces = () => {
  return async (dispatch, getState) => {
    try {
      const spacesCount = getState().space.allSpaces.length;
      const response = await axios.get(
        `${apiUrl}/spaces?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${spacesCount}`
      );
      console.log(response.data);
      dispatch(fetchedAllSpaces(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchSpaceById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/spaces/${id}`);
      console.log(response);
      dispatch(fetchedSpaceDetails(response.data.space));
    } catch (e) {
      console.log(e);
    }
  };
};
