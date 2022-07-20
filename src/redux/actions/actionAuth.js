const ActionAuth ={
    Login: value => {
        return {
          type: LOGIN,
          value,
        };
      },
      AutoLogin: value => {
        return {
          type: 'AUTO_LOGIN',
          value,
        };
      },
      Register: value => {
        return {
          type: 'REGISTER',
          value,
        };
      },
      CheckPhone: value => {
        return {
          type: 'CHECK_PHONE',
          value,
        };
      },
      ForgotPassword: value => {
        return {
          type: 'FORGOT_PASSWORD',
          value,
        };
      },
      changeAvatar: value => {
        return {
          type: 'CHANGE_AVATAR',
          value,
        };
      },
      changeInformation: value => {
        return {
          type: 'CHANGE_INFORMATION',
          value,
        };
      },
    logout: value => {
        return {
          type: 'LOGOUT',
          value,
        };
      },
};
export default ActionAuth;