export const USER_NAME = "USER_NAME";
export const USER_NUMBER = "USER_NUMBER";
export const USER_EMAIL = "USER_EMAIL";

export const addUserName = (userName) => {
  return {
    type: USER_NAME,
    userName,
  };
};

export const addUserNumber = (userNumber) => {
  return {
    type: USER_NUMBER,
    userNumber,
  };
};

export const addUserEmail = (userEmail) => {
  return {
    type: USER_EMAIL,
    userEmail,
  };
};
