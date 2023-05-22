import Cookies from "universal-cookie";
const cookies = new Cookies();

export const get_Token = () => {
  return cookies.get("t_id");
};
