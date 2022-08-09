import axios from "axios";

const getOne = async (searchObject) => {
  const response = await axios.post("api/log/searchProfile", searchObject);

  return response.data;
};

const getCandle = async (searchObject) => {
  const response = await axios.post("api/log/searchCandle", searchObject);

  return response.data;
};

export default { getOne, getCandle };
