import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://assignment-11-server-two-ochre.vercel.app",
});
const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
