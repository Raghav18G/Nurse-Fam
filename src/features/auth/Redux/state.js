// import Cookie from "universal-cookie";
// const cookies = new Cookie();

let state = {
  t_id: "",
  loading: false,
  error: "",
  success: false,
  signup: {
    signup_loading: false,
    temp_pass: "",
    signup_error: "",
    signup_success: false,
  },
  passwordUpdate: {
    pass_loading: false,
    pass_error: "",
  },
  forgotPass: {
    fPass_loading: false,
    FPass_OTP: "",
    fpass_error: "",
    fpass_success: false,
  },
};

export default state;
