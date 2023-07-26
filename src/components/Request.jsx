import axios from "axios";

const request = async () => {
  const catRequest = async () => {
    try {
      const response = await axios.get("https://catfact.ninja/facts");
      const data = response.data.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const result = await catRequest();
  return result;
};

export default request;
